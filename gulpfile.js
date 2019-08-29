/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const { spawn } = require('child_process');

const { watch, series, parallel, src, dest } = require('gulp');
const eslint = require('gulp-eslint');
const rmfr = require('rmfr');
const path = require('path');

const VSM_COMPONENTS_GIT = 'git@github.ford.com:vehicle-sales-management/vsm-ui-components.git';
const VSM_SERVER_GIT = 'git@github.ford.com:vehicle-sales-management/vsm-ui-server.git';

function onlyWin(func) {
  return process.platform === 'win32' && func();
}

function notWin(func) {
  return process.platform !== 'win32' && func();
}

async function _asyncCopy(srcFiles, destFiles) {
  return new Promise((resolve, reject) => {
    const srcStream = src(`${path.resolve(srcFiles)}/**/**.*`);
    const destStream = dest(path.resolve(destFiles));
    srcStream.pipe(destStream).on('end', resolve);
    srcStream.on('error', reject);
    destStream.on('error', reject);
  });
}

async function _asyncExec(cmd, args) {
  return new Promise((resolve, reject) => {
    let childProcess;

    onlyWin(() => {
      childProcess = spawn('cmd', ['/s', '/c', cmd, ...args], {
        stdio: [null, process.stdout, process.stderr],
      });
    });

    notWin(() => {
      childProcess = spawn(cmd, args, {
        stdio: [null, process.stdout, process.stderr],
      });
    });

    childProcess.on('error', err => reject(err));

    childProcess.on('exit', (code, signal) => {
      if (signal) {
        return reject(new Error(`Process terminated after receiving ${signal} signal.`));
      }
      if (code !== 0) {
        return reject(new Error(`Process exited with non-zero exitcode: ${code}.`));
      }

      return resolve();
    });
  });
}

async function _asyncRollup() {
  return _asyncExec('npx', ['rollup', '--config']);
}

async function _asyncClone(url, target) {
  return _asyncExec('git', ['clone', '--depth=1', url, target]);
}

async function test() {
  return _asyncExec('npx', ['karma', 'start']);
}

async function testWatch() {
  return _asyncExec('npx', ['karma', 'start', '--single-run=false', '--auto-watch=true']);
}

async function updateComponents() {
  const cloneTarget = path.resolve(__dirname, '.vsm_components');
  const finalTarget = path.resolve(__dirname, 'vsm-ui-components');
  await Promise.all([rmfr(finalTarget), rmfr(cloneTarget)]);
  await _asyncClone(VSM_COMPONENTS_GIT, cloneTarget);
  await _asyncCopy(`${cloneTarget}/src`, path.resolve(__dirname, 'vsm-ui-components'));
  return rmfr(cloneTarget);
}

async function updateServer() {
  const cloneTarget = path.resolve(__dirname, '.vsm_server');
  const finalTarget = path.resolve(__dirname, 'vsm-ui-server');
  await Promise.all([rmfr(finalTarget), rmfr(cloneTarget)]);
  await _asyncClone(VSM_SERVER_GIT, cloneTarget);
  await _asyncCopy(`${cloneTarget}/src`, path.resolve(__dirname, 'vsm-ui-server'));
  return rmfr(cloneTarget);
}

async function dist() {
  const tmp = path.resolve(__dirname, '.disttmp');
  const target = path.resolve(__dirname, 'dist');
  await Promise.all([rmfr(tmp), rmfr(target)]);
  await _asyncRollup();
  await Promise.all([
    _asyncCopy(path.resolve(__dirname, 'server'), path.resolve(tmp, 'server')),
    _asyncCopy(path.resolve(__dirname, 'vsm-ui-server'), path.resolve(tmp, 'vsm-ui-server')),
  ]);
  await _asyncCopy(tmp, target);
  return rmfr(tmp);
}

async function distWatch() {
  await dist();
  watch(['server/**/*.js', 'src/**/*.js'], parallel(dist));
}

function lint() {
  const config = require('./.eslintrc.js');
  return src(['server/**/*.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(eslint(config))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function lintWatch() {
  watch(['server/**/*.js', 'src/**/*.js', 'test/**/*.js'], lint);
}

async function format() {
  await _asyncExec('npx', ['prettier', '**/*.js', '--write']);
}

exports.update_server = updateServer;
exports.update_components = updateComponents;
exports.test = test;
exports.test_watch = testWatch;
exports.dist = dist;
exports.dist_watch = distWatch;
exports.lint = lint;
exports.lint_watch = lintWatch;
exports.format = format;

exports.build = series(lint, format, test, dist);
