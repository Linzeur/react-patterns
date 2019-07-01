import useInternetConnection from "./use-internet-connection";

function InternetConnection({ children, render = children }) {
  const listEvents = useInternetConnection();

  return render(listEvents);
}

export default InternetConnection;
