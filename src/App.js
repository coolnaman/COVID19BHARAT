import React,{Component} from "react";
import Box from "./Components/box";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);
    this.appName= "COVID 19";
    this.boxName="APP for Covid"
    console.log("constructor");
    this.state = {
      caseTimeSeries : []
    }
  }

  async componentDidMount(){
    try{
        const {data} = await axios.get("https://api.covid19india.org/data.json");
        var caseTimeArr = data ? data.cases_time_series :[]
        console.log("data",data);
    }catch(error){
        console.log("error",error);
    }

    this.setState({caseTimeSeries:caseTimeArr.reverse()})
}

  render(){
    
    return(
      <>
      <Header />
      <Body caseData = {this.state.caseTimeSeries} />
      <Footer />
      
      </>
    )
  }
}

export default App;

