import React, { Component } from "react";
import { SaleWidgetWrapper } from "./style";
import { Row, Col, Carousel } from "antd";
export default class extends Component {
  render() {
    const { fontColor, label, price, details, date } = this.props;

    const textColor = {
      color: fontColor
    };

    return (
      <SaleWidgetWrapper className="isoSaleWidget">
        <Row>
          <div style={this.props.headerStyle}>
            <p
              style={{
                color: "white",
                paddingTop: "15px",
                paddingLeft: "15px"
              }}
            >
              {label}
            </p>
            <p
              style={{
                color: "white",
                paddingTop: "12px",
                paddingLeft: "15px",
                paddingBottom: "10px"
              }}
            >
              {date}
            </p>
          </div>
          {/* <span className="isoSalePrice" style={textColor}>
          {price}
        </span> */}
          {/* <p className="isoSaleDetails">{details}</p> */}
          <div>
            <div style={{ width: "50%", float: "left" }}>
              <p
                style={{
                  paddingTop: "25px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Sales
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $914.05
              </p>
              <p
                style={{
                  paddingTop: "25px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Advertising Cost
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $-914.05
              </p>
              <p
                style={{
                  paddingTop: "25px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Gross Profit
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  paddingBottom: "10px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $94.05
              </p>
            </div>
            <div style={{ width: "50%", float: "left" }}>
              <p
                style={{
                  paddingTop: "10px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Orders/
              </p>
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Units/Refunds
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $914.05
              </p>
              <p
                style={{
                  paddingTop: "25px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Estimated Payout
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $-914.05
              </p>
              <p
                style={{
                  paddingTop: "25px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                Net Profit
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  paddingBottom: "10px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: fontColor
                }}
              >
                $94.05
              </p>
            </div>
          </div>
          <div
            style={{ width: "50%", height: "100%", backgroundColor: "blue" }}
          />
        </Row>
      </SaleWidgetWrapper>
    );
  }
}
