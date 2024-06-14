import React, { useState, useEffect } from "react";
import { Table, Pagination, Space } from "antd";
import {
  updateDeletePage,
  updateEditPage,
} from "../../redux/slices/userManagementReducer";
import { useDispatch } from "react-redux";

function CommonTable({ isEdit, color, data, userdetailfun, DeleteUser }) {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6); // Adjusted pageSize to display 6 rows per page
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => setDataSource(data), 1000);
    return () => clearTimeout(timeout);
  }, [data]);

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const DeleteUserDetails = (data) => {
    dispatch(
      updateDeletePage({
        showAdd: true,
        userId: data?.userId,
      })
    );
  };

  const FilterEditPage = (data) => {
    dispatch(
      updateEditPage({
        showAdd: true,
        userEmail: data?.email,
      })
    );
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role.localeCompare(b.role),
    },
    {
      title: "School/Student Id",
      dataIndex: "schoolid",
      key: "schoolid",
      sorter: (a, b) => a.schoolid.localeCompare(b.schoolid),
    },
    {
      title: "Created At",
      dataIndex: "created",
      key: "created",
      sorter: (a, b) => new Date(a.created) - new Date(b.created),
    },
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

  // Calculate paginated data based on currentPage and pageSize
  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Table
        style={{ width: "100%", marginTop: 20 }}
        columns={columns}
        dataSource={paginatedData}
        pagination={false} // Remove default pagination
      />
      <Pagination
        style={{ marginTop: 10 }}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePaginationChange}
        total={dataSource.length} // Adjust total to match the total number of items in the dataSource
        showSizeChanger={false} // Disable size changer
      />
    </>
  );
}

export default CommonTable;
