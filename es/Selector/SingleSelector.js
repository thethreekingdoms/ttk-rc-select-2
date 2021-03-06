import React from 'react';
import Input from './Input';

var SingleSelector = function SingleSelector(_ref) {
  var inputElement = _ref.inputElement,
      prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputRef = _ref.inputRef,
      disabled = _ref.disabled,
      autoFocus = _ref.autoFocus,
      accessibilityIndex = _ref.accessibilityIndex,
      mode = _ref.mode,
      open = _ref.open,
      values = _ref.values,
      placeholder = _ref.placeholder,
      tabIndex = _ref.tabIndex,
      showSearch = _ref.showSearch,
      searchValue = _ref.searchValue,
      activeValue = _ref.activeValue,
      onInputKeyDown = _ref.onInputKeyDown,
      onInputMouseDown = _ref.onInputMouseDown,
      onInputChange = _ref.onInputChange;
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch && open;
  var item = values[0];

  var getDisplayValue = function getDisplayValue(value) {
    return value === null ? '' : String(value);
  };

  var inputValue = searchValue;

  if (combobox) {
    inputValue = item ? getDisplayValue(item.value) : activeValue || searchValue;
  } // Not show text when closed expect combobox mode


  var hasTextInput = mode !== 'combobox' && !open ? false : !!inputValue;
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, React.createElement(Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    tabIndex: tabIndex
  })), !combobox && item && !hasTextInput && React.createElement("span", {
    className: "".concat(prefixCls, "-selection-item")
  }, item.label), !item && !hasTextInput && React.createElement("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

export default SingleSelector;