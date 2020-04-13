import React, { Component } from "react";
import Box from "./Components/box";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import axios from "axios";
import CommonDataTable from "./Components/CommonDataTable";
import Banner from "./Components/Banner";

class App extends Component {
  constructor(props) {
    super(props);
    this.appName = "COVID 19";
    this.boxName = "APP for Covid";
    console.log("constructor");
    this.state = {
      caseTimeSeries: [],
      date: "",
      confirmedCases: "",
      recoveredCases: "",
      totalCases: "",
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://api.covid19india.org/data.json"
      );
      var caseTimeArr = data ? data.cases_time_series : [];
      var caseTimeSeries = caseTimeArr.reverse();
      var date = caseTimeSeries[0].date;
      var confirmedCases = caseTimeSeries[0].dailyconfirmed;
      var recoveredCases = caseTimeSeries[0].dailyrecovered;
      var totalCases = caseTimeSeries[0].totalconfirmed;
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }

    this.setState({
      caseTimeSeries,
      date,
      confirmedCases,
      recoveredCases,
      totalCases,
    });
  }

  render() {
    const {
      caseTimeSeries,
      date,
      confirmedCases,
      recoveredCases,
      totalCases,
    } = this.state;
    return (
      <>
        <Header />
        <Banner
          date={date}
          confirmedCases={confirmedCases}
          recoveredCases={recoveredCases}
          totalCases={totalCases}
        />
        {/* <Body caseData={this.state.caseTimeSeries} /> */}
        <CommonDataTable commonData={caseTimeSeries} />
        <Footer />
      </>
    );
  }
}

export default App;
