import React, { Component } from "react";
import { Row, Col, DatePicker } from "antd";
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import basicStyle from "../../settings/basicStyle";
import IsoWidgetsWrapper from "./widgets-wrapper";
import IsoWidgetBox from "./widget-box";
import CardWidget from "./card/card-widgets";

import Input, { InputGroup } from "../../components/uielements/input";
import Select, { SelectOption } from "../../components/uielements/select";
import * as rechartConfigs from "../Charts/recharts/config";
import IntlMessages from "../../components/utility/intlMessages";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CustomCard from "./customCard/custom-card";
import Box from "../../components/utility/box";
import { Icon, Progress } from "antd";
import Tabs, { TabPane } from "../../components/uielements/tabs";
import { Menu, Table, Header, Image } from "semantic-ui-react";
import Button, { ButtonGroup } from "../../components/uielements/button";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import "./style.css";
import { ResponsiveBar } from "@nivo/bar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import PAndLTable from "./P&LTable";

const Option = SelectOption;
const bigList = [];
const { RangePicker } = DatePicker;
for (var i = 1; i <= 1000; i++) {
  bigList.push({ id: i, name: `Item ${i}` });
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 1,
      val: undefined,

      isDatePicker: false,
      date: "",
      arrayValue: "All Products",

      ppcSales: null,
      organicSales: null,
      fbaFees: null,
      amazonFees: null,
      ppcSpCosts: null,
      ppcSpCost: null,
      profit: null
    };
  }
  // onBackPress = () => {
  //   this.setState({ activeItemIndex: 3 });
  //   console.log(
  //     this.carouselRef.props.requestToChangeActive(5),
  //     "/////////////////"
  //   );
  // };

  TableExampleCollapsing = () => {
    return (
      <div className="table-responsive">
        <Table
          basic="very"
          celled
          collapsing
          style={{ width: "97%", margin: "15px" }}
        >
          <Table.Header style={{ textAlign: "center" }}>
            <Table.Row style={{ height: "60px", backgroundColor: "#f1f3f6" }}>
              <Table.HeaderCell
                style={{
                  textAlign: "left",
                  paddingLeft: "10px",
                  border: "1px solid #ddd"
                }}
              >
                Products
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Units
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Refunds
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Sales
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Promo
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Ads
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Gross profit
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Net profit
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Margin
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                ROI
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Info
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row style={{ textAlign: "center" }}>
              <Table.Cell
                style={{
                  padding: "10px 0px 10px 0px",
                  border: "1px solid #ddd"
                }}
              >
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                  style={{ width: "14%", float: "left" }}
                />

                <p>
                  Jewelry Packaging Gift Box 2.5*2.5*3cm
                  <br />
                  <b style={{ color: "#4e91ff" }}>
                    B0XLFX8JXK / SKU 2 / COG: 0.75 /
                  </b>
                  <br />
                  Price: $ 9.99 / FBA
                </p>
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>22</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>22</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                $ 41.69
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                $ 0.00
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                $ 0.00
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                $ -25.72
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                {" "}
                $ -25.72
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>-62%</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                -739%
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>More</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };

  renderPAndLTable = () => {
    return (
      <div className="table-responsive">
        <PAndLTable />
      </div>
    );
  };

  renderSalesTable = () => {
    return (
      <div className="table-responsive">
        <Table
          basic="very"
          celled
          collapsing
          style={{ width: "97%", margin: "15px" }}
        >
          <Table.Header style={{ textAlign: "center" }}>
            <Table.Row style={{ height: "60px", backgroundColor: "#f1f3f6" }}>
              <Table.HeaderCell
                style={{
                  textAlign: "left",
                  paddingLeft: "10px",
                  border: "1px solid #ddd"
                }}
              >
                Products
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Sales
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Units
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Promos
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Profit
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Margin
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row style={{ textAlign: "center" }}>
              <Table.Cell
                style={{
                  padding: "10px 0px 10px 0px",
                  border: "1px solid #ddd"
                }}
              >
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                  style={{ width: "14%", float: "left" }}
                />

                <p>
                  Jewelry Packaging Gift Box 2.5*2.5*3cm
                  <br />
                  <b style={{ color: "#4e91ff" }}>
                    B0XLFX8JXK / SKU 2 / COG: 0.75 /
                  </b>
                  <br />
                  Price: $ 9.99 / FBA
                </p>
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                <Progress percent={30} size="small" />
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                <Progress percent={50} size="small" />
              </Table.Cell>

              <Table.Cell style={{ border: "1px solid #ddd" }}>
                <Progress percent={10} size="small" />
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                <Progress percent={40} size="small" />
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                <Progress percent={60} size="small" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };

  renderCostTable = () => {
    return (
      <div className="table-responsive">
        <Table
          basic="very"
          celled
          collapsing
          style={{ width: "97%", margin: "15px" }}
        >
          <Table.Header style={{ textAlign: "center" }}>
            <Table.Row style={{ height: "60px", backgroundColor: "#f1f3f6" }}>
              <Table.HeaderCell
                style={{
                  textAlign: "left",
                  paddingLeft: "10px",
                  border: "1px solid #ddd"
                }}
              >
                Products
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Price
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Shipping
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Net
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Cost of Goods
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Shipping Costs
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Amazon Fees
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                FBA Fees
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Total Cost
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Unit Profit
              </Table.HeaderCell>
              <Table.HeaderCell style={{ border: "1px solid #ddd" }}>
                Margin
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row style={{ textAlign: "center" }}>
              <Table.Cell
                style={{
                  padding: "10px 0px 10px 0px",
                  border: "1px solid #ddd"
                }}
              >
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                  style={{ width: "14%", float: "left" }}
                />

                <p>
                  Jewelry Packaging Gift Box 2.5*2.5*3cm
                  <br />
                  <b style={{ color: "#4e91ff" }}>
                    B0XLFX8JXK / SKU 2 / COG: 0.75 /
                  </b>
                  <br />
                  Price: $ 9.99 / FBA
                </p>
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                USD 19.99
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>FBA</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                19.99
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>60</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>0.0</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>3.00</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>3.28</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                12.28
              </Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>7.71</Table.Cell>
              <Table.Cell style={{ border: "1px solid #ddd" }}>
                38.75
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };

  selectMultipleOption = value => {
    console.log("Val", value);
    this.setState({ arrayValue: value });
  };

  tab1Filter1 = value => {
    if (value === "Custom range") {
      this.setState({ isDatePicker: true });
    }
  };

  renderTab1Filters = () => {
    return (
      <Row
        style={{
          display: "flex",
          flexFlow: "row wrap"
        }}
        gutter={0}
        justify="start"
      >
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <Select
            style={{
              border: "2px solid #ddd",
              borderRadius: "6px",
              width: "100%"
            }}
            defaultValue="Period: Today / Yesterday / Forecast..."
            onChange={value => {
              this.tab1Filter1(value);
            }}
          >
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday / Forecast..."
            >
              Period: Today / Yesterday / Forecast...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday..."
            >
              Period: Today / Yesterday...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday / 7 days..."
            >
              Period: Today / Yesterday / 7 days...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: This Week / Last Week..."
            >
              Period: This Week / Last Week...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: This Month / Last Month..."
            >
              Period: This Month / Last Month...
            </Option>
            <Option style={{ margin: "20px" }} value="Custom range">
              {this.state.date ? this.state.date : "Custom range"}
            </Option>
          </Select>

          {this.state.isDatePicker && (
            <RangePicker
              open={this.state.isDatePicker}
              onChange={(dates, dateStrings) => {
                this.setState({
                  isDatePicker: false,
                  date: `${dateStrings[0]} - ${dateStrings[1]}`
                });
                console.log(dates, "date");
                console.log(dateStrings, "datestring");
              }}
            />
          )}
        </Col>

        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <InputGroup
            compact
            style={{
              backgroundColor: "red",
              border: "2px solid #ddd",
              borderRadius: "6px",
              fontWeight: "500"
            }}
          >
            <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={value => this.selectMultipleOption(value)}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={600}
            />
          </InputGroup>
        </Col>
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <InputGroup compact>
            <Select
              style={{
                width: "100%",
                border: "2px solid #ddd",
                borderRadius: "6px"
              }}
              defaultValue="
                All Marketplaces"
            >
              <Option Keys={1} value="Amazon.co.uk">
                Amazon.co.uk
              </Option>
              <Option Keys={2} value="Amazon.de">
                Amazon.de
              </Option>
              <Option Keys={2} value="Amazon.es">
                Amazon.es
              </Option>
              <Option Keys={2} value="Amazon.fr">
                Amazon.fr
              </Option>
              <Option Keys={2} value=" Amazon.it">
                Amazon.it
              </Option>
            </Select>
          </InputGroup>
        </Col>
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <Button type="primary" style={{ width: "100%" }}>
            {<IntlMessages id="Filter" />}
          </Button>
        </Col>
      </Row>
    );
  };

  renderTilesFilter = () => {
    return (
      <Row
        style={{
          display: "flex",
          flexFlow: "row wrap"
        }}
        gutter={0}
        justify="start"
      >
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <Select
            style={{
              border: "2px solid #ddd",
              borderRadius: "6px",
              width: "100%"
            }}
            defaultValue="Period: Today / Yesterday / Forecast..."
            onChange={value => {
              this.tab1Filter1(value);
            }}
          >
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday / Forecast..."
            >
              Period: Today / Yesterday / Forecast...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday..."
            >
              Period: Today / Yesterday...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: Today / Yesterday / 7 days..."
            >
              Period: Today / Yesterday / 7 days...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: This Week / Last Week..."
            >
              Period: This Week / Last Week...
            </Option>
            <Option
              style={{ margin: "20px" }}
              value="Period: This Month / Last Month..."
            >
              Period: This Month / Last Month...
            </Option>
            <Option style={{ margin: "20px" }} value="Custom range">
              {this.state.date ? this.state.date : "Custom range"}
            </Option>
          </Select>

          {this.state.isDatePicker && (
            <RangePicker
              open={this.state.isDatePicker}
              onChange={(dates, dateStrings) => {
                this.setState({
                  isDatePicker: false,
                  date: `${dateStrings[0]} - ${dateStrings[1]}`
                });
                console.log(dates, "date");
                console.log(dateStrings, "datestring");
              }}
            />
          )}
        </Col>

        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <InputGroup
            compact
            style={{
              backgroundColor: "red",
              border: "2px solid #ddd",
              borderRadius: "6px",
              fontWeight: "500"
            }}
          >
            <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={value => this.selectMultipleOption(value)}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={false}
              selectAllText="Select all"
              dropdownHeight={600}
            />
          </InputGroup>
        </Col>
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <InputGroup compact>
            <Select
              style={{
                width: "100%",
                border: "2px solid #ddd",
                borderRadius: "6px"
              }}
              defaultValue="
                All Marketplaces"
            >
              <Option Keys={1} value="Amazon.co.uk">
                Amazon.co.uk
              </Option>
              <Option Keys={2} value="Amazon.de">
                Amazon.de
              </Option>
              <Option Keys={2} value="Amazon.es">
                Amazon.es
              </Option>
              <Option Keys={2} value="Amazon.fr">
                Amazon.fr
              </Option>
              <Option Keys={2} value=" Amazon.it">
                Amazon.it
              </Option>
            </Select>
          </InputGroup>
        </Col>
        <Col md={6} xs={24} style={{ padding: " 0px 10px 0px 10px" }}>
          <Button type="primary" style={{ width: "100%" }}>
            {<IntlMessages id="Filter" />}
          </Button>
        </Col>
      </Row>
    );
  };

  renderTiles = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const { rowStyle, colStyle } = basicStyle;
    return (
      <Row
        style={{
          display: "flex"
        }}
        gutter={0}
        justify="start"
      >
        {/* <Col lg={0.5} md={0.5} sm={0.5} xs={0.5} style={{}}>
          <div
            onClick={() => {
              this.onBackPress();
            }}
            style={{ marginTop: "100px" }}
          >
            <img
              style={{ width: "15px", height: "20px" }}
              src={require("../../image/back.png")}
            />
          </div>
        </Col> */}
        <Col lg={24} md={24} sm={24} xs={24} style={{}}>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr
            // means to render carousel on server-side.
            slidesToSlide={1}
            infinite={false}
            autoPlay={this.props.deviceType !== "mobile" ? false : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            //customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-20-px"
          >
            <Col style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <CustomCard
                  headerStyle={{ backgroundColor: "rgb(78, 145, 255)" }}
                  date={"06/12/2016"}
                  label={<IntlMessages id="Today" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
            <Col style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <CustomCard
                  headerStyle={{ backgroundColor: "rgb(37, 116, 183)" }}
                  date={"06/12/2016"}
                  label={<IntlMessages id="Yesterday" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
            <Col style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <CustomCard
                  headerStyle={{ backgroundColor: "rgb(32, 134, 68)" }}
                  date={"06/12/2016"}
                  label={<IntlMessages id="This Month" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
            <Col style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <CustomCard
                  headerStyle={{ backgroundColor: "rgb(35, 103, 68)" }}
                  date={"06/12/2016"}
                  label={<IntlMessages id="This Month(Forecast)" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
            <Col style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <CustomCard
                  headerStyle={{ backgroundColor: "rgb(77, 130, 102)" }}
                  date={"06/12/2016"}
                  label={<IntlMessages id="Last Month" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
          </Carousel>
        </Col>
        {/* <Col lg={0.5} md={0.5} sm={0.5} xs={0.5} style={{}}>
          <div style={{ marginTop: "100px" }}>
            <img
              style={{ width: "15px", height: "20px" }}
              src={require("../../image/forward.png")}
            />
          </div>
        </Col> */}
      </Row>
    );
  };

  renderTable = () => {
    return (
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="audit" />
                Products
              </span>
            }
            key="1"
          >
            {this.TableExampleCollapsing()}
          </TabPane>
        </Tabs>
      </Row>
    );
  };

  onMouseEnterOnChart = action => {
    if (action.id === "PPC Sales") {
      this.setState({ ppcSales: action.value * 2 });
    } else if (action.id === "Organic Sales") {
      this.setState({ organicSales: action.value * 2 });
    } else if (action.id === "FBA Fees") {
      this.setState({ fbaFees: action.value * 2 });
    } else if (action.id === "Amazon Fees") {
      this.setState({ amazonFees: action.value * 2 });
    } else if (action.id === "PPC SP Costs") {
      this.setState({ ppcSpCosts: action.value * 2 });
    } else if (action.id === "PPC SP Cost") {
      this.setState({ ppcSpCost: action.value * 2 });
    } else if (action.id === "Profit") {
      this.setState({ profit: action.value * 2 });
    }
    console.log(action, "actionMouseEnter");
  };

  onMouseLeaveOnChart = action => {
    if (action.id === "PPC Sales") {
      this.setState({ ppcSales: null });
    } else if (action.id === "Organic Sales") {
      this.setState({ organicSales: null });
    } else if (action.id === "FBA Fees") {
      this.setState({ fbaFees: null });
    } else if (action.id === "Amazon Fees") {
      this.setState({ amazonFees: null });
    } else if (action.id === "PPC SP Costs") {
      this.setState({ ppcSpCosts: null });
    } else if (action.id === "PPC SP Cost") {
      this.setState({ ppcSpCost: null });
    } else if (action.id === "Profit") {
      this.setState({ profit: null });
    }
    console.log(action, "onMouseLeaveonchart");
  };

  setChartLables = value => {
    const {
      ppcSales,
      organicSales,
      fbaFees,
      amazonFees,
      ppcSpCosts,
      ppcSpCost,
      profit
    } = this.state;
    if (value.id === "PPC Sales" && ppcSales) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "Organic Sales" && organicSales) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "FBA Fees" && fbaFees) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "Amazon Fees" && amazonFees) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "PPC SP Costs" && ppcSpCosts) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "PPC SP Cost" && ppcSpCost) {
      return `${value.id}     ${value.value / 2} %`;
    } else if (value.id === "Profit" && profit) {
      return `${value.id}     ${value.value / 2} %`;
    }
    return value.id;
  };

  renderChart = () => {
    let data = [
      {
        country: "Gross Sales",
        "PPC Sales": this.state.ppcSales ? this.state.ppcSales : 17,
        lable: "PPC Sales 17%",
        "hot dogColor": "black",

        "Organic Sales": this.state.organicSales ? this.state.organicSales : 25,
        lable: "Organic Sales 17%",
        burgerColor: "green"
      },
      {
        country: "Cost",
        "FBA Fees": this.state.fbaFees ? this.state.fbaFees : 17,
        lable: "FBA Fees 17%",
        "Amazon Fees": this.state.amazonFees ? this.state.amazonFees : 30,
        lable: "Amazon Fees 17%",
        "PPC SP Costs": this.state.ppcSpCosts ? this.state.ppcSpCosts : 17,
        lable: "PPC SP Costs 17%",
        "PPC SP Cost": this.state.ppcSpCost ? this.state.ppcSpCost : 17,
        lable: "PPC SP Cost 17%"
      },
      {
        country: "Profit",
        Profit: this.state.profit ? this.state.profit : 17,
        lable: "Profit 17%",
        "hot dogColor": "hsl(119, 70%, 50%)"
      }
    ];
    return (
      <Row
        style={{
          display: "flex"
        }}
      >
        <Col md={18} xs={24}>
          <ResponsiveBar
            data={data}
            groupMode="stacked"
            layout="vertical"
            padding={0.2}
            innerPadding={2}
            enableGridY={false}
            axisLeft={false}
            isInteractive={false}
            height={300}
            label={value => {
              return this.setChartLables(value);
            }}
            onMouseEnter={action => {
              this.onMouseEnterOnChart(action);
            }}
            onMouseLeave={action => this.onMouseLeaveOnChart(action)}
            // labelFormat={(value, id, data) => {
            //   console.log(value, "1111111111111");
            //   console.log(id, "1111111111111");
            // }}
            keys={[
              "PPC Sales",
              "Organic Sales",
              "FBA Fees",
              "Amazon Fees",
              "PPC SP Costs",
              "PPC SP Cost",
              "Profit"
            ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            colors={{ scheme: "category10" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            // defs={[
            //   {
            //     id: "dots",
            //     type: "patternDots",
            //     background: "inherit",
            //     color: "#38bcb2",
            //     size: 4,
            //     padding: 1,
            //     stagger: true
            //   },
            //   {
            //     id: "lines",
            //     type: "patternLines",
            //     background: "inherit",
            //     color: "#eed312",
            //     rotation: -45,
            //     lineWidth: 6,
            //     spacing: 10
            //   }
            // ]}
            fill={[
              {
                match: {
                  id: "fries"
                },
                id: "dots"
              },
              {
                match: {
                  id: "sandwich"
                },
                id: "lines"
              }
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            // axisBottom={{
            //   tickSize: 5,
            //   tickPadding: 5,
            //   tickRotation: 0,
            //   legend: "country",
            //   legendPosition: "middle",
            //   legendOffset: 32
            // }}

            // axisLeft={{
            //   tickSize: 5,
            //   tickPadding: 5,
            //   tickRotation: 0,
            //   legend: "food",
            //   legendPosition: "middle",
            //   legendOffset: -40
            // }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={"white"}
            labelFormat={data => {
              return data;
            }}
            //labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            // legends={[
            //   {
            //     dataFrom: "keys",
            //     anchor: "bottom-right",
            //     direction: "column",
            //     justify: false,
            //     translateX: 120,
            //     translateY: 0,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemDirection: "left-to-right",
            //     itemOpacity: 0.85,
            //     symbolSize: 20,
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemOpacity: 1
            //         }
            //       }
            //     ]
            //   }
            // ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </Col>
        <Col md={6} xs={24} style={{}}>
          {this.renderAccordion()}
        </Col>
      </Row>
    );
  };

  renderAccordion = () => {
    return (
      <Accordion
        allowMultipleExpanded={true}
        style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Sales</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <div>
              <span>Organic</span>
              <span style={{ float: "right", textAlign: "right" }}>
                {" "}
                $17,403.88
              </span>
            </div>
            <div>
              <span>PPC</span>
              <span style={{ float: "right", textAlign: "right" }}>
                $17,4.88
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Units</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <div>
              <span>Organic</span>
              <span style={{ float: "right", textAlign: "right" }}>
                {" "}
                $17,403.88
              </span>
            </div>
            <div>
              <span>PPC</span>
              <span style={{ float: "right", textAlign: "right" }}>
                $17,4.88
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Promo</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <div>
              <span>Organic</span>
              <span style={{ float: "right", textAlign: "right" }}>
                {" "}
                $17,403.88
              </span>
            </div>
            <div>
              <span>PPC</span>
              <span style={{ float: "right", textAlign: "right" }}>
                $17,4.88
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Advertising Cost</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <div>
              <span>Organic</span>
              <span style={{ float: "right", textAlign: "right" }}>
                {" "}
                $17,403.88
              </span>
            </div>
            <div>
              <span>PPC</span>
              <span style={{ float: "right", textAlign: "right" }}>
                $17,4.88
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Giftwrap</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <div>
              <span>Organic</span>
              <span style={{ float: "right", textAlign: "right" }}>
                {" "}
                $17,403.88
              </span>
            </div>
            <div>
              <span>PPC</span>
              <span style={{ float: "right", textAlign: "right" }}>
                $17,4.88
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <span>Shipping</span>
                <span
                  style={{
                    float: "right",
                    textAlign: "right",
                    marginRight: "10px"
                  }}
                >
                  {" "}
                  $17,403.88
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{}}>
            <p>Organic</p>
            <p>$17,403.88</p>
            <p>PPC</p>
            <p>$17,403.88</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  renderChartTable = () => {
    return (
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="audit" />
                All
              </span>
            }
            key="1"
          >
            {this.TableExampleCollapsing()}
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="shopping-cart " />
                Sales
              </span>
            }
            key="2"
          >
            {this.renderSalesTable()}
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="shopping-cart " />
                Cost
              </span>
            }
            key="3"
          >
            {this.renderCostTable()}
          </TabPane>
        </Tabs>
      </Row>
    );
  };
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      overflow: "hidden"
    };

    const chartEvents = [
      {
        eventName: "select",
        callback(Chart) {}
      }
    ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };

    return (
      <LayoutWrapper>
        <div style={wisgetPageStyle}>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
              <CardWidget
                propsStyle={{ width: "100%" }}
                isIcon={false}
                isSeprator={true}
                number={"Dashboard"}
                text={
                  "Dashboard is your main tool for analysing your key performance indicators. Here you can see your daily profit in real time, as well as drill down into any period of time or product and see a list of all fees. Click more on the tiles or in the product table to see detailed numbers. Switch to the chart or P&L table view on the top of the panel to see a different representation of the data. Filter the dashboard by any product or group of products (e.g. by brand), by marketplace or choose a custom period of time in the date filter."
                }
                headingStyle={{ color: "grey" }}
                textStyle={{ marginTop: "2%" }}
              />
            </Col>
          </Row>

          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
              <IsoWidgetBox
                style={{
                  webkitBoxShadow: "1px 3px 1px #9E9E9E",
                  mozBoxShadow: "1px 3px 1px #9E9E9E",
                  boxShadow: "10px 1px 10px #9E9E9E"
                }}
                style={{ padding: 0 }}
              >
                <Row
                  style={{
                    width: "100%",
                    backgroundColor: "#4e91ff"
                  }}
                >
                  <Box>
                    <Tabs defaultActiveKey="1">
                      <TabPane
                        tab={
                          <span>
                            <Icon type="copy" />
                            Tiles
                          </span>
                        }
                        key="1"
                      >
                        {this.renderTilesFilter()}
                        {this.renderTiles()}
                        {this.renderTable()}
                      </TabPane>
                      <TabPane
                        tab={
                          <span>
                            <Icon type="bar-chart" />
                            Chart
                          </span>
                        }
                        key="2"
                      >
                        {this.renderTab1Filters()}
                        {this.renderChart()}
                        {this.renderChartTable()}
                      </TabPane>
                      <TabPane
                        tab={
                          <span>
                            <Icon type="bar-chart" />
                            {"P&L"}
                          </span>
                        }
                        key="3"
                      >
                        {this.renderTab1Filters()}
                        {this.renderPAndLTable()}
                        {this.renderTable()}
                      </TabPane>
                    </Tabs>
                  </Box>
                </Row>

                {/* TABLE */}
                {/* <TableViews.SimpleView
                    tableInfo={tableinfos[0]}
                    dataList={tableDataList}
                  /> */}
              </IsoWidgetBox>

              {/* <CardWidget
                //icon="ion-android-chat"
                //iconcolor="#42A5F5"
                propsStyle={{ width: "100%" }}
                isIcon={false}
                isSeprator={true}
                number={"Dashboard"}
                text={
                  "Dashboard is your main tool for analysing your key performance indicators. Here you can see your daily profit in real time, as well as drill down into any period of time or product and see a list of all fees. Click more on the tiles or in the product table to see detailed numbers. Switch to the chart or P&L table view on the top of the panel to see a different representation of the data. Filter the dashboard by any product or group of products (e.g. by brand), by marketplace or choose a custom period of time in the date filter."
                }
                headingStyle={{ color: "grey" }}
                textStyle={{ marginTop: "2%" }}
              /> */}
              {/* </IsoWidgetsWrapper> */}
            </Col>
          </Row>

          {/* <Row style={rowStyle} gutter={0} justify="start"> */}
          {/* <Col lg={6} md={12} sm={12} xs={24} style={colStyle}> */}
          {/* <IsoWidgetsWrapper> */}
          {/* Sticker Widget */}
          {/* <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget1.text" />}
                  icon="ion-email-unread"
                  fontColor="#ffffff"
                  bgColor="#7266BA"
                /> */}
          {/* </IsoWidgetsWrapper> */}
          {/* </Col> */}

          {/* <Col lg={6} md={12} sm={12} xs={24} style={colStyle}> */}
          {/* <IsoWidgetsWrapper> */}
          {/* Sticker Widget */}
          {/* <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget2.text" />}
                  icon="ion-android-camera"
                  fontColor="#ffffff"
                  bgColor="#42A5F6"
                /> */}
          {/* </IsoWidgetsWrapper> */}
          {/* </Col> */}

          {/* <Col lg={6} md={12} sm={12} xs={24} style={colStyle}> */}
          {/* <IsoWidgetsWrapper> */}
          {/* Sticker Widget */}
          {/* <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget3.text" />}
                  icon="ion-chatbubbles"
                  fontColor="#ffffff"
                  bgColor="#7ED320"
                /> */}
          {/* </IsoWidgetsWrapper> */}
          {/* </Col> */}

          {/* <Col lg={6} md={12} sm={12} xs={24} style={colStyle}> */}
          {/* <IsoWidgetsWrapper> */}
          {/* Sticker Widget */}
          {/* <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget4.text" />}
                  icon="ion-android-cart"
                  fontColor="#ffffff"
                  bgColor="#F75D81"
                /> */}
          {/* </IsoWidgetsWrapper> */}
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </LayoutWrapper>
    );
  }
}
