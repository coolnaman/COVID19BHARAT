import React, { Component } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

class CommonDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
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
      ],
      filterText: "",
      resetPaginationToggle: false,
      commonData: [],
    };
  }

  onFilter = (e) => {
    this.setState({ filterText: e.target.value });
  };

  onClear = () => {
    this.setState({ filterText: "" });
  };

  render() {
    const { filterText } = this.state;
    const { commonData, columns } = this.props;
    // const filteredItems = commonData.filter((item) =>
    //   item.title.toLowerCase().includes(filterText.toLowerCase())
    // );
    return (
      <>
        <DataTable
          // subHeader
          // subHeaderComponent={
          //   <FilterComponent
          //     onFilter={this.onFilter}
          //     onClear={this.onClear}
          //     filterText={filterText}
          //   />
          // }
          columns={columns}
          data={commonData}
          pagination={true}
          defaultSortField
        />
      </>
    );
  }
}

const FilterComponent = (props) => {
  return (
    <div className="row filterComp">
      <div className="filterComp-input">
        <input
          className="form-control"
          type="text"
          placeholder="Filter By Name"
          value={props.filterText}
          onChange={props.onFilter}
        />
      </div>

      <button onClick={props.onClear}>X</button>
    </div>
  );
};

export default CommonDataTable;
