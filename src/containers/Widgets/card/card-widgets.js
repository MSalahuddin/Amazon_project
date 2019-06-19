import React, { Component } from "react";
import CardWidgetWrapper from "./style";

export default class extends Component {
  render() {
    const {
      icon,
      iconcolor,
      number,
      text,
      isSeprator,
      isIcon,
      propsStyle,
      textStyle,
      headingStyle
    } = this.props;
    const iconStyle = {
      color: iconcolor
    };

    return (
      <CardWidgetWrapper className="isoCardWidget">
        {isIcon && (
          <div className="isoIconWrapper">
            <i className={icon} style={iconStyle} />
          </div>
        )}

        <div className="isoContentWrapper" style={propsStyle}>
          <h3 className="isoStatNumber" style={headingStyle}>
            {number}
          </h3>
          {isSeprator && (
            <div
              style={{ height: 1, width: "100%", backgroundColor: "#ddd" }}
            />
          )}
          <div style={textStyle}>
            <span className="isoLabel">{text}</span>
          </div>
        </div>
      </CardWidgetWrapper>
    );
  }
}
