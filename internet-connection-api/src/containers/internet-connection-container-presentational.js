import React from "react";
import InternetConnectionPresentational from "../components/internet-connection-container-presentational";
import useInternetConnection from "../use-internet-connection";

function InternetConnectionContainer({ title }) {
  const status = useInternetConnection();

  return <InternetConnectionPresentational title={title} status={status} />;
}

export default InternetConnectionContainer;
