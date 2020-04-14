
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import Markdown from 'react-markdown';
import { withA11y } from '@storybook/addon-a11y';
import { storiesOf, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import AutoAdjustDropdownSource from 'rc-source-loader!../examples/auto-adjust-dropdown';
import ComboboxSource from 'rc-source-loader!../examples/combobox';
import ControlledSource from 'rc-source-loader!../examples/controlled';
import CustomIconSource from 'rc-source-loader!../examples/custom-icon';
import CustomTagsSource from 'rc-source-loader!../examples/custom-tags';
import DropdownRenderSource from 'rc-source-loader!../examples/dropdownRender';
import EmailSource from 'rc-source-loader!../examples/email';
import ForceSuggestSource from 'rc-source-loader!../examples/force-suggest';
import GetPopupContainerSource from 'rc-source-loader!../examples/getPopupContainer';
import LoadingSource from 'rc-source-loader!../examples/loading';
import MulSuggestSource from 'rc-source-loader!../examples/mul-suggest';
import MulTagSuggestSource from 'rc-source-loader!../examples/mul-tag-suggest';
import MultipleReadonlySource from 'rc-source-loader!../examples/multiple-readonly';
import MultipleSource from 'rc-source-loader!../examples/multiple';
import OptgroupSource from 'rc-source-loader!../examples/optgroup';
import OptionFilterPropSource from 'rc-source-loader!../examples/optionFilterProp';
import OptionLabelPropSource from 'rc-source-loader!../examples/optionLabelProp';
import SingleAnimationSource from 'rc-source-loader!../examples/single-animation';
import SingleSource from 'rc-source-loader!../examples/single';
import SuggestSource from 'rc-source-loader!../examples/suggest';
import TagsSource from 'rc-source-loader!../examples/tags';
import UpdateOptionSource from 'rc-source-loader!../examples/update-option';
import AutoAdjustDropdown from '../examples/auto-adjust-dropdown';
import Combobox from '../examples/combobox';
import Controlled from '../examples/controlled';
import CustomIcon from '../examples/custom-icon';
import CustomTags from '../examples/custom-tags';
import DropdownRender from '../examples/dropdownRender';
import Email from '../examples/email';
import ForceSuggest from '../examples/force-suggest';
import GetPopupContainer from '../examples/getPopupContainer';
import Loading from '../examples/loading';
import MulSuggest from '../examples/mul-suggest';
import MulTagSuggest from '../examples/mul-tag-suggest';
import MultipleReadonly from '../examples/multiple-readonly';
import Multiple from '../examples/multiple';
import Optgroup from '../examples/optgroup';
import OptionFilterProp from '../examples/optionFilterProp';
import OptionLabelProp from '../examples/optionLabelProp';
import SingleAnimation from '../examples/single-animation';
import Single from '../examples/single';
import Suggest from '../examples/suggest';
import Tags from '../examples/tags';
import UpdateOption from '../examples/update-option';

import { themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: {
    theme: themes.light,
    name: 'ttk-rc-select',
    url: 'http://github.com/react-component/select',
    title:'ttk-rc-select'
  },
});
import READMECode from '../README.md';


// add demo
storiesOf('ttk-rc-select', module)
.addDecorator(withA11y) 
.addDecorator((storyFn, context) => withConsole()(storyFn)(context))
.add(
  'README',
  () => (
    <div
      className="markdown-body entry-content"
      style={{
        padding: 24,
      }}
    >
      <Markdown escapeHtml={false} source={READMECode} />
    </div>
  ),
  {
    source: {
      code: READMECode,
    },
  },
)
.add('auto-adjust-dropdown', () => <AutoAdjustDropdown />,{
      source: {
        code: AutoAdjustDropdownSource,
      },
    })
.add('combobox', () => <Combobox />,{
      source: {
        code: ComboboxSource,
      },
    })
.add('controlled', () => <Controlled />,{
      source: {
        code: ControlledSource,
      },
    })
.add('custom-icon', () => <CustomIcon />,{
      source: {
        code: CustomIconSource,
      },
    })
.add('custom-tags', () => <CustomTags />,{
      source: {
        code: CustomTagsSource,
      },
    })
.add('dropdownRender', () => <DropdownRender />,{
      source: {
        code: DropdownRenderSource,
      },
    })
.add('email', () => <Email />,{
      source: {
        code: EmailSource,
      },
    })
.add('force-suggest', () => <ForceSuggest />,{
      source: {
        code: ForceSuggestSource,
      },
    })
.add('getPopupContainer', () => <GetPopupContainer />,{
      source: {
        code: GetPopupContainerSource,
      },
    })
.add('loading', () => <Loading />,{
      source: {
        code: LoadingSource,
      },
    })
.add('mul-suggest', () => <MulSuggest />,{
      source: {
        code: MulSuggestSource,
      },
    })
.add('mul-tag-suggest', () => <MulTagSuggest />,{
      source: {
        code: MulTagSuggestSource,
      },
    })
.add('multiple-readonly', () => <MultipleReadonly />,{
      source: {
        code: MultipleReadonlySource,
      },
    })
.add('multiple', () => <Multiple />,{
      source: {
        code: MultipleSource,
      },
    })
.add('optgroup', () => <Optgroup />,{
      source: {
        code: OptgroupSource,
      },
    })
.add('optionFilterProp', () => <OptionFilterProp />,{
      source: {
        code: OptionFilterPropSource,
      },
    })
.add('optionLabelProp', () => <OptionLabelProp />,{
      source: {
        code: OptionLabelPropSource,
      },
    })
.add('single-animation', () => <SingleAnimation />,{
      source: {
        code: SingleAnimationSource,
      },
    })
.add('single', () => <Single />,{
      source: {
        code: SingleSource,
      },
    })
.add('suggest', () => <Suggest />,{
      source: {
        code: SuggestSource,
      },
    })
.add('tags', () => <Tags />,{
      source: {
        code: TagsSource,
      },
    })
.add('update-option', () => <UpdateOption />,{
      source: {
        code: UpdateOptionSource,
      },
    })
