import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

const AppMain = () => {
  return (
    <Fragment>
      <Routes>
        {/* Default blank landing page */}
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                color: "#555",
                fontFamily: "Segoe UI, sans-serif"
              }}
            >
              <h1>Welcome</h1>
              <p>This is your clean landing page.</p>
            </div>
          }
        />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
