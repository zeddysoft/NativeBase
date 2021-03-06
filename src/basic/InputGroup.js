import React, { Component, PropTypes } from "react";
import { View, ViewPropTypes } from "react-native";

import variables from "../theme/variables/platform";
import { connectStyle } from "native-base-shoutem-theme";
import computeProps from "../Utils/computeProps";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class InputGroup extends Component {
  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? 1 : undefined,
        borderRadius: this.props.rounded
          ? variables.inputGroupRoundedBorderRadius
          : undefined
      }
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.prepareRootProps()}>
        {this.props.children}
      </View>
    );
  }
}

InputGroup.propTypes = {
  ...ViewPropTypes,
  regular: PropTypes.bool,
  underline: PropTypes.bool,
  rounded: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool
};

const StyledInputGroup = connectStyle(
  "NativeBase.InputGroup",
  {},
  mapPropsToStyleNames
)(InputGroup);

export { StyledInputGroup as InputGroup };
