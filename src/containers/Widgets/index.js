import React, { Component } from "react";
import clone from "clone";
import { Row, Col } from "antd";
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import basicStyle from "../../settings/basicStyle";
import IsoWidgetsWrapper from "./widgets-wrapper";
import IsoWidgetBox from "./widget-box";
import CardWidget from "./card/card-widgets";
import ProgressWidget from "./progress/progress-widget";
import SingleProgressWidget from "./progress/progress-single";
import ReportsWidget from "./report/report-widget";
import StickerWidget from "./sticker/sticker-widget";
import SaleWidget from "./sale/sale-widget";

import VCardWidget from "./vCard/vCard-widget";
import SocialWidget from "./social-widget/social-widget";
import SocialProfile from "./social-widget/social-profile-icon";
import userpic from "../../image/user1.png";
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from "../../components/uielements/input";
import Select, { SelectOption } from "../../components/uielements/select";
import * as rechartConfigs from "../Charts/recharts/config";
import IntlMessages from "../../components/utility/intlMessages";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CustomCard from "./customCard/custom-card";
import Box from "../../components/utility/box";
import { Icon } from "antd";
import Tabs, { TabPane } from "../../components/uielements/tabs";
import { Progress, Menu, Table, Header, Image } from "semantic-ui-react";
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
const Option = SelectOption;
const bigList = [];

for (var i = 1; i <= 1000; i++) {
  bigList.push({ id: i, name: `Item ${i}` });
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 1,
      val: undefined,
      multiSelectVal: "All Products"
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

  selectMultipleOption = value => {
    console.count("onChange");
    console.log("Val", value);
    this.setState({ arrayValue: value });
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
            defaultValue="Zhejiang"
          >
            <Option style={{ margin: "20px" }} value="Zhejiang">
              Period: Today / Yesterday / Forecast...
            </Option>
            <Option style={{ margin: "20px" }} value="Jiangsu">
              Period: Today / Yesterday...
            </Option>
            <Option style={{ margin: "20px" }} value="Jiangsu">
              Period: Today / Yesterday / 7 days...
            </Option>
            <Option style={{ margin: "20px" }} value="Jiangsu">
              Period: This Week / Last Week...
            </Option>
            <Option style={{ margin: "20px" }} value="Jiangsu">
              Period: This Month / Last Month...
            </Option>
            <Option style={{ margin: "20px" }} value="Jiangsu">
              Custom range
            </Option>
          </Select>
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
              value={this.state.multiSelectVal}
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
              onChange={value => {
                this.setState({ val: value });
              }}
              style={{
                width: "100%",
                border: "2px solid #ddd",
                borderRadius: "6px"
              }}
              defaultValue="
                All Marketplaces"
            >
              <Option Keys={1} value="Zhejiang">
                Amazon.co.uk
              </Option>
              <Option Keys={2} value="Jiangsu">
                Amazon.de
              </Option>
              <Option Keys={2} value="Jiangsu">
                Amazon.es
              </Option>
              <Option Keys={2} value="Jiangsu">
                Amazon.fr
              </Option>
              <Option Keys={2} value="Jiangsu">
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

  renderChart = () => {
    let data = [
      {
        country: "Gross Sales",
        "PPC Sales": 130,
        lable: "PPC Sales 17%",
        "hot dogColor": "black",
        "Organic Sales": 100,
        lable: "Organic Sales 17%",
        burgerColor: "green"
      },
      {
        country: "Cost",
        "FBA Fees": 120,
        lable: "FBA Fees 17%",
        sandwichColor: "hsl(56, 70%, 50%)",
        "Amazon Fees": 105,
        lable: "Amazon Fees 17%",
        kebabColor: "hsl(166, 70%, 50%)",
        "PPC SP Costs": 90,
        lable: "PPC SP Costs 17%",
        friesColor: "hsl(260, 70%, 50%)",
        "PPC SP Cost": 62,
        lable: "PPC SP Cost 17%",
        donutColor: "hsl(267, 70%, 50%)"
      },
      {
        country: "Profit",
        profit: 90,
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
            enableGridY={true}
            height={500}
            label={value => {
              return value.id;
            }}
            // labelFormat={(value, id, data) => {
            //   console.log(value, "1111111111111");
            //   console.log(id, "1111111111111");
            // }}
            keys={[
              "hot dog",
              "burger",
              "sandwich",
              "kebab",
              "fries",
              "donut",
              "PPC Sales",
              "Organic Sales",
              "FBA Fees",
              "Amazon Fees",
              "PPC SP Costs",
              "PPC SP Cost",
              "profit"
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
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
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
            {this.TableExampleCollapsing()}
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
            {this.TableExampleCollapsing()}
          </TabPane>
        </Tabs>
      </Row>
    );
  };
  render() {
    console.log(this.state.val, "////////////////");
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
                        {this.renderTab1Filters()}
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
