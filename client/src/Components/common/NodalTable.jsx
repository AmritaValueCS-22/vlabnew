import React, { useState, useEffect } from "react";
import { Table, Pagination, Space } from "antd";

function NodalTable({ isEdit, color, data }) {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const timeout = setTimeout(() => setDataSource(data), 1000);
    return () => clearTimeout(timeout);
  }, [data]);

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const columns = [
    { title: "School Name", dataIndex: "schoolName", key: "schoolName" },
    { title: "School Address", dataIndex: "schoolAddress", key: "schoolAddress" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "District", dataIndex: "district", key: "district" },
    { title: "Pincode", dataIndex: "pincode", key: "pincode" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          size="middle"
          style={{ cursor: "pointer" }}
          onClick={() => (isEdit ? FilterEditPage(_) : DeleteUserDetails(_))}
        >
          <i
            className={`fa-solid ${
              isEdit ? "fa-pencil-square" : "fa-trash"
            } text-${color}`}
            style={{ marginRight: 10, fontSize: 20 }}
          />
        </Space>
      ),
    },
  ];

  const paginatedData = data?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Table
        style={{ width: "100%", marginTop: 20 }}
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: 10 }}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePaginationChange}
        total={dataSource.length}
        showSizeChanger={true}
        pageSizeOptions={[10, 20, 50]}
      />
    </>
  );
}

export default NodalTable;
