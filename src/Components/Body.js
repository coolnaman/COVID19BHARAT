import React,{Component} from "react"
import axios from "axios";

class Body extends Component{
    constructor (props) {
        super(props)
        this.state ={
            
        }
    }

  
    render(){
        console.log("caseTimeSeries",this.props.caseData)
        return (
           <>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Date</th>
      <th scope="col">Daily confirmed Cases</th>
      <th scope="col">Daily Deceased</th>
      <th scope="col">Daily Recovered</th>
      <th scope="col">Total Deceased</th>
      <th scope="col">Total Recovered</th>
      <th scope="col">Total Confirmed</th>
    </tr>
  </thead>
  <tbody>
      {this.props.caseData.map(( data,index)=>{
          return(
            <tr>
          <th scope="row">{index+1}</th>
          <td>{data.date}</td>
          <td>{data.dailyconfirmed}</td>
          <td>{data.dailydeceased}</td>
          <td>{data.dailyrecovered}</td>
          <td>{data.totaldeceased}</td>
          <td>{data.totalrecovered}</td>
          <td>{data.totalconfirmed}</td>
    </tr>
          )
      })}
  </tbody>
</table>
           </>
        )
    };
}

export default Body;