import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ size = 100 }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Spinner
          variant="primary"
          animation="border"
          role="status"
          style={{ width: size, height: size }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loading;
