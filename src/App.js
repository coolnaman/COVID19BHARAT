import React, { Component } from "react";
import Box from "./Components/box";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import axios from "axios";
import CommonDataTable from "./Components/CommonDataTable";
import Banner from "./Components/Banner";
import "./assets/css/stateTable.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.appName = "COVID 19";
    this.boxName = "APP for Covid";
    console.log("constructor");
    this.state = {
      caseTimeSeries: [],
      statewise: [],
      date: "",
      confirmedCases: "",
      recoveredCases: "",
      totalCases: "",
    };
    this.columns = [
      {
        name: "Date",
        sortable: true,
        selector: "date",
      },
      {
        name: "Daily Confirmed Cases",
        sortable: true,
        selector: "dailyconfirmed",
      },
      {
        name: "Daily Deceased.",
        sortable: true,
        selector: "dailydeceased",
      },
      {
        name: "daily Recovered",
        sortable: true,
        selector: "dailyrecovered",
      },
      {
        name: "Total Deceased",
        sortable: true,
        selector: "totaldeceased",
      },
      {
        name: "Total Recovered",
        sortable: true,
        selector: "totalrecovered",
      },
      {
        name: "Total Confirmed",
        sortable: true,
        selector: "totalconfirmed",
      },
    ];
    this.stateColumns = [
      {
        name: "State",
        sortable: true,
        selector: "state",
      },
      {
        name: "Active",
        sortable: true,
        selector: "active",
      },
      {
        name: "Deaths",
        sortable: true,
        selector: "deaths",
      },
      {
        name: "Recovered",
        sortable: true,
        selector: "recovered",
      },
      {
        name: "Confirmed",
        sortable: true,
        selector: "confirmed",
      },
    ];
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

    try {
      const { data } = await axios.get(
        "https://api.covid19india.org/data.json"
      );
      var stateViseArr = data ? data.statewise : [];
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }

    this.setState({
      caseTimeSeries: caseTimeArr.reverse(),
      statewise: stateViseArr,
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
        <div>
          <div className="col-md-6 stateTable">
            <CommonDataTable
              commonData={this.state.statewise}
              columns={this.stateColumns}
            />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
