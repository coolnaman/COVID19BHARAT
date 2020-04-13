import React, { Component } from "react";
import "../assets/css/banner.scss";
import Card from "./Card";
class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date, confirmedCases, recoveredCases, totalCases } = this.props;

    return (
      <>
        <div className="banner-box">
          <div className="left-box">
            <Card heading={"Date"} text={date} />
            <Card heading={"Confirmed Cases"} text={confirmedCases} />
            <Card heading={"Recovered Cases"} text={recoveredCases} />
            <Card heading={"Total Confirmed"} text={totalCases} />
          </div>
          <div className="right-box"></div>
        </div>
      </>
    );
  }
}

export default Banner;
