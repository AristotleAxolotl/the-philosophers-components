import VsmHeader from './vsm-header';
import VsmSubHeader from './vsm-sub-header';
import VsmPara from './vsm-para';
import VsmCard from './vsm-card';
import VsmCardList from './vsm-card-list';
import VsmDataList from './vsm-data-list';
import VsmData from './vsm-data';
import VsmImageButton from './vsm-image-button';
import VsmSelector from './vsm-selector';
import VsmIcon from './vsm-icon';
import VsmSwitcher from './vsm-switcher';
import VsmButton from './vsm-button';
import VsmList from './vsm-list';
import VsmListItem from './vsm-list-item';
import VsmProxy from './vsm-proxy';

import { mix, pluggable, emitsEvents, utils } from './lib';
import { VsmDataJson, VsmDataRemote, VsmDataSort, VsmDataPoll } from './plugins';

const plugins = {
  VsmDataJson,
  VsmDataRemote,
  VsmDataSort,
  VsmDataPoll,
};

const lib = {
  mix,
  pluggable,
  emitsEvents,
  utils,
};

export default {
  VsmHeader,
  VsmSubHeader,
  VsmPara,
  VsmCard,
  VsmCardList,
  VsmDataList,
  VsmData,
  VsmImageButton,
  VsmSelector,
  VsmSwitcher,
  VsmButton,
  VsmIcon,
  VsmList,
  VsmListItem,
  VsmProxy,
  plugins,
  lib,
};
