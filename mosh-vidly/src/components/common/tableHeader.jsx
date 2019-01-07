import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;

    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />;

    return <i className="fa fa-arrow-circle-o-down" aria-hidden="true" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column, index) =>
            column.key !== "indexColumn" ? (
              <th
                className="clickable"
                // key={column.path || column.key}
                key={index}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            ) : (
              <th key={index}>{column.label}</th>
            )
          )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
