
import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import withSource from 'storybook-addon-source';

function loadStories() {
  require('/Users/caixiaobing/select/.storybook/index.js');
}

addDecorator(withNotes);
addDecorator(withSource);


configure(loadStories, module);