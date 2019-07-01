import React from "react";
import ListEvents from "./events-list";
import useInternetConnection from "./use-internet-connection";
import InternetConnectionChildren from "./internet-connection-function-children";
import InternetConnectionRender from "./internet-connection-render";
import withInternetConnection from "./internet-connection-hoc";
import InternetConnectionContainerPresentational from "./containers/internet-connection-container-presentational";

function App({ pattern }) {
  const title = <h1>List of execution of Page Internet Connection API </h1>;
  const statusHooks = useInternetConnection();
  switch (pattern) {
    case "custom-hooks":
      return <ListEvents title={title} status={statusHooks} />;
    case "function-children":
      return (
        <InternetConnectionChildren>
          {status => {
            return <ListEvents title={title} status={status} />;
          }}
        </InternetConnectionChildren>
      );
    case "render-props":
      return (
        <InternetConnectionRender
          render={status => {
            return <ListEvents title={title} status={status} />;
          }}
        />
      );
    case "high-order-component":
      function HOC({ statusHOC }) {
        return <ListEvents title={title} status={statusHOC} />;
      }
      const InternetConnectionHOC = withInternetConnection(HOC);
      return <InternetConnectionHOC />;
    case "container-presentational":
      return <InternetConnectionContainerPresentational title={title} />;
    default:
      return <ListEvents title={title} status={statusHooks} />;
  }
}

export default App;
