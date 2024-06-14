import React, { useState, useEffect } from "react";
import Table from "../common/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { userRoleForAdmin } from "../../utilits/common/userDetails";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import AddUser from "./AddUser";
import { updateResisterData } from "../../redux/slices/authReducer";

const EditUser = ({
  color,
  isEdit,
  data,
  state,
  onHandleChange,
  userdetailfun,
}) => {
  const { showEditPageDetails, userDetails } = useSelector(
    (state) => state.userManagement
  );
  const { registerData } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  console.log(userDetails);

  const filterDetails = userDetails
    ?.filter((item) => item.email === showEditPageDetails?.userEmail)
    .map((item) => ({
      password: item.password,
      confirmpassword: item.password,
      role: item.role,
      fullname: item.fullname,
      age: item.age,
      email: item.email,
      gender: item.gender,
      phonenumber: item.phonenumber,
      state: item.state,
      country: item.country,
      profession: item.profession,
      college: item.college,
      subject: item.subject,
      university: item.university,
      schoolId: item.schoolId,
      userId: item._id,
      username: item.username,
    }));

  const tableData = filteredData?.map((item, index) => {
    return {
      id: index + 1,
      name: item.fullname,
      email: item.email,
      role: userRoleForAdmin(item.role),
      schoolid: item.schoolId,
      created: moment(item.registerDate).format("DD-MM-YYYY hh:mm"),
      userId: item._id,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredData(data); // Reset filtered data whenever the input data changes
  }, [data]);

  useEffect(() => {
    if (isEdit && showEditPageDetails?.showAdd) {
      dispatch(updateResisterData(filterDetails[0]));
    }
    userdetailfun();
  }, [isEdit, showEditPageDetails?.showAdd]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.schoolId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          userRoleForAdmin(item.role)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isEdit && showEditPageDetails?.showAdd ? (
        <AddUser
          state={registerData}
          onHandleChange={onHandleChange}
          isEdit
          isEditAdd={showEditPageDetails?.showAdd}
        />
      ) : (
        <>
          <form
            className="d-sm- form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-100 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: 500 }} className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for email or name"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <div className="input-group-append">
                <button className={`btn btn-${color}`} type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
          <Table isEdit={isEdit} color={color} data={tableData} />
        </>
      )}
    </div>
  );
};

export default EditUser;
