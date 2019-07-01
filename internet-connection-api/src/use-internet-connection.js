import React from "react";

function useInternetConnection() {
  const [statusConnection, setStatusConnection] = React.useState("Connected");

  React.useEffect(() => {
    function handleOnline(event) {
      setStatusConnection("Connected");
    }

    function handleOffline(event) {
      setStatusConnection("Disconnected");
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [statusConnection]);

  return statusConnection;
}

export default useInternetConnection;
