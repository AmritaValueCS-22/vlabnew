import React, { useState } from "react";
import { Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { NodalManagmentData } from "../../Data/NodalManagment";
import NodalManageCard from "../../Components/nodalDash/NodalManageCard";
import NodalAddUser from "../../Components/nodalDash/NodalAddUser";
import NodalEditUser from "../../Components/nodalDash/NodalEditUser";

const NodalManage = () => {
  const [crudId, setCrudId] = useState(1);
  const [cardColor, setCardColor] = useState("primary");
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    schoolAddress: "",
    state: "",
    district: "",
    pincode: "",
  });
  const [editUser, setEditUser] = useState({});
  const [showDeletePage, setShowDeletePage] = useState(false);

  const onHandleClick = (id, color) => {
    setCrudId(id);
    setCardColor(color);
    setEditUser({});
    setSchoolData({
      schoolName: "",
      schoolAddress: "",
      state: "",
      district: "",
      pincode: "",
    });
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setSchoolData(prevState => ({ ...prevState, [name]: value }));
    setEditUser({ ...editUser, [name]: value });
  };
  const onAddUser = () => {
    const areFieldsFilled = Object.values(schoolData).every(value => value.trim() !== "");
    console.log("areFieldsFilled:", areFieldsFilled);
  
    if (!areFieldsFilled) {
      notification.error({
        message: "Error",
        description: "Please fill all the input fields.",
      });
      return;
    }
  
    notification.success({
      message: "Success",
      description: "User added successfully.",
    });
  
    console.log("Add user:", schoolData);
  };
  return (
    <div>
      <div className="row">
        {NodalManagmentData.map((item) => {
          return <NodalManageCard key={item.id} item={item} onClick={onHandleClick} />;
        })}
      </div>
      <div className="card shadow mb-4">
        <div
          className={`card-header py-3 d-flex flex-row align-items-center justify-content-between border-left-${cardColor}`}
        >
          <h6 className={`m-0 font-weight-bold text-${cardColor}`}>
            {crudId === 1
              ? "ADD NODAL CENTER"
              : crudId === 2
              ? "EDIT NODAL CENTER"
              : "DELETE NODAL CENTER"}
          </h6>
          <i
            className={`fa-solid fa-upload text-${cardColor}`}
            style={{ marginRight: 10 }}
          />
        </div>
        <div className="card-body">
          <div
            style={{
              height: "500px",
              maxHeight: "auto",
              minHeight: "auto",
              display: "flex",
            }}
          >
            {crudId === 1 ? (
              <NodalAddUser onHandleChange={onHandleChange} state={schoolData} />
            ) : crudId === 2 ? (
              <NodalEditUser
                color={cardColor}
                isEdit
                data={editUser}
                onHandleChange={onHandleChange}
                state={schoolData}
              />
            ) : (
              <NodalEditUser
                color={cardColor}
                isEdit={false}
                data={editUser}
              />
            )}
          </div>
        </div>
        {crudId === 1 && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ marginRight: 50, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={onAddUser}
            >
              {" "}
              ADD
            </button>
          </div>
        )}
        {crudId === 2 && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ marginRight: 30, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={() => setEditUser({})}
            >
              {" "}
              Cancel
            </button>
            <button
              style={{ marginRight: 50, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={onEditUser}
              disabled={Object.keys(editUser).length === 0}
            >
              {" "}
              Edit
            </button>
          </div>
        )}
      </div>
      {showDeletePage && (
        <Modal
          title="Confirm Delete"
          visible={showDeletePage}
          onOk={onDelete}
          onCancel={handleClose}
          confirmLoading={false} 
          centered
        >
          <p>
            <ExclamationCircleOutlined
              style={{ color: "red", fontWeight: 700, marginRight: 10 }}
            />
            Are you sure you want to delete this user?
          </p>
        </Modal>
      )}
    </div>
  );
};

export default  NodalManage;
