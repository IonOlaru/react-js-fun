import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({
  columns,
  sortColumn,
  onSort,
  data,
  currentPage,
  pageSize
}) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody
        columns={columns}
        data={data}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </table>
  );
};

export default Table;
