import useInternetConnection from "./use-internet-connection";

function InternetConnection({ children }) {
  const status = useInternetConnection();

  return children(status);
}

export default InternetConnection;
