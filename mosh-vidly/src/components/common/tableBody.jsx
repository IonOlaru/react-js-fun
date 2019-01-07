import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column, indexRow, currentPage, pageSize) {
    if (column.key === "indexColumn")
      return <b>{(currentPage - 1) * pageSize + indexRow + 1}</b>;

    if (column.content) return column.content(item);
    return _.get(item, column.path);
  }

  render() {
    const { data, columns, currentPage, pageSize } = this.props;
    return (
      <tbody>
        {data.map((item, indexRow) => (
          <tr key={indexRow}>
            {columns.map((column, indexColumn) => (
              <td key={indexColumn}>
                {this.renderCell(item, column, indexRow, currentPage, pageSize)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
