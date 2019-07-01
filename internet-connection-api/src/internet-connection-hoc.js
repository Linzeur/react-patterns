import React from "react";
import useInternetConnection from "./use-internet-connection";

function withInternetConnection(Component) {
  function InternetConnection() {
    const status = useInternetConnection();
    return <Component status={status} />;
  }

  return InternetConnection;
}

export default withInternetConnection;
