import Trigger from 'rc-trigger';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownMenu from './DropdownMenu';
import ReactDOM from 'react-dom';
import { isSingleMode } from './util';

Trigger.displayName = 'Trigger';

const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
};

export default class SelectTrigger extends React.Component {
  static propTypes = {
    onPopupFocus: PropTypes.func,
    dropdownMatchSelectWidth: PropTypes.bool,
    dropdownAlign: PropTypes.object,
    visible: PropTypes.bool,
    disabled: PropTypes.bool,
    showSearch: PropTypes.bool,
    dropdownClassName: PropTypes.string,
    multiple: PropTypes.bool,
    inputValue: PropTypes.string,
    filterOption: PropTypes.any,
    options: PropTypes.any,
    prefixCls: PropTypes.string,
    popupClassName: PropTypes.string,
    children: PropTypes.any,
    dropdownFooter: PropTypes.any,
    dropdownHeader: PropTypes.any
  };

  state = {
    dropdownWidth: null,
  }

  componentDidMount() {
    this.setDropdownWidth();
  }

  componentDidUpdate() {
    this.setDropdownWidth();
  }

  setDropdownWidth = () => {
    const { visible } = this.props;
    if (visible) {
      const width = ReactDOM.findDOMNode(this).offsetWidth;
      if (width !== this.state.dropdownWidth) {
        this.setState({ dropdownWidth: width });
      }
    }
  }

  getInnerMenu = () => {
    return this.popupMenu && this.popupMenu.refs.menu;
  };

  getPopupDOMNode = () => {
    return this.refs.trigger.getPopupDomNode();
  };

  getDropdownElement = newProps => {
    const props = this.props;
    return (
      <DropdownMenu
        ref={this.saveMenu}
        {...newProps}
        prefixCls={this.getDropdownPrefixCls()}
        onMenuSelect={props.onMenuSelect}
        onMenuDeselect={props.onMenuDeselect}
        value={props.value}
        firstActiveValue={props.firstActiveValue}
        defaultActiveFirstOption={props.defaultActiveFirstOption}
        dropdownMenuStyle={props.dropdownMenuStyle}
        dropdownFooter={props.dropdownFooter}
        dropdownHeader={props.dropdownHeader}
        enableHideDropdownByClick={props.enableHideDropdownByClick}
        onPopupVisibleChange={props.onDropdownVisibleChange}
      />
    );
  };

  getDropdownTransitionName = () => {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${this.getDropdownPrefixCls()}-${props.animation}`;
    }
    return transitionName;
  };

  getDropdownPrefixCls = () => {
    return `${this.props.prefixCls}-dropdown`;
  };

  saveMenu = menu => {
    this.popupMenu = menu;
  };

  render() {
    const { onPopupFocus, ...props } = this.props;
    const {
      multiple,
      visible,
      inputValue,
      dropdownAlign,
      disabled,
      showSearch,
      dropdownClassName,
      dropdownStyle,
      dropdownMatchSelectWidth,
    } = props;
    const dropdownPrefixCls = this.getDropdownPrefixCls();
    const popupClassName = {
      [dropdownClassName]: !!dropdownClassName,
      [`${dropdownPrefixCls}--${multiple ? 'multiple' : 'single'}`]: 1,
    };
    const popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus,
      multiple,
      inputValue,
      visible,
    });
    let hideAction;
    if (disabled) {
      hideAction = [];
    } else if (isSingleMode(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    const popupStyle = { ...dropdownStyle };
    const widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = `${this.state.dropdownWidth}px`;
    }

    return (
      <Trigger
        {...props}
        showAction={disabled ? [] : ['click']}
        hideAction={hideAction}
        ref="trigger"
        popupPlacement="bottomLeft"
        builtinPlacements={BUILT_IN_PLACEMENTS}
        prefixCls={dropdownPrefixCls}
        popupTransitionName={this.getDropdownTransitionName()}
        onPopupVisibleChange={props.onDropdownVisibleChange}
        popup={popupElement}
        popupAlign={dropdownAlign}
        popupVisible={visible}
        getPopupContainer={props.getPopupContainer}
        popupClassName={classnames(popupClassName)}
        popupStyle={popupStyle}
      >
        {props.children}
      </Trigger>
    );
  }
}

SelectTrigger.displayName = 'SelectTrigger';
