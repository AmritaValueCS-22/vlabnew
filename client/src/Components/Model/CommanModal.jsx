import React, { useState } from "react";
import { BellFilled } from "@ant-design/icons";
import { Modal, Card } from "antd";
const CommonModal = ({ open, close, item }) => {
  return (
    <>
      <Modal
        title={
          <span style={{ fontSize: "28px", fontWeight: 700 }}>
            {item.experiment}
          </span>
        }
        centered
        open={open}
        onOk={close}
        onCancel={close}
        width={1000}
        height={700}
      >
        <Card
          bordered={false}
          style={{ width: "100%", height: "700px", overflowY: "scroll" }}
        >
          <p style={{ fontSize: "18px", fontWeight: 600 }}>
            {item.description}
          </p>
          {item.links.map((link) => (
            <div key={link.id}>
              <div style={{ display: "flex" }}>
                <BellFilled
                  style={{ color:"#136AD5", fontSize: "18px", marginRight: 10 }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    textDecoration: "underline",
                    color: "#136AD5",
                    fontWeight: 700,
                  }}
                >
                  {link.title}
                </p>
              </div>
              <div
                style={{ fontSize: "18px", fontWeight: 500, marginLeft: 28 }}
              >
                {" "}
                {link.description}
              </div>
            </div>
          ))}
        </Card>
      </Modal>
    </>
  );
};
export default CommonModal;
