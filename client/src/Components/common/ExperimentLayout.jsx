import React from "react";

const WithExperimentLayout = (WrappedComponent) => {
  return function ExperimentStyle(props) {
    return (
      <div
        style={{
          marginTop: 30,
          flex: 0.85,
          marginLeft: 30,
          paddingInline: 30,
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithExperimentLayout;
