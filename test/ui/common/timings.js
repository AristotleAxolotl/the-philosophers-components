export async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function waitFor(test) {
  if (test) return;
  await delay(10);
  // eslint-disable-next-line consistent-return
  return waitFor(test);
}