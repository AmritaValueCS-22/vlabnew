import { ENVFOR, LOCAL_HOST, LOCAL_PORT } from "./base";

const connect = () => {
  let url;
  if (ENVFOR === "development") {
    url = `http://${LOCAL_HOST}:${LOCAL_PORT}/api`;
  }
  return url;
};

export default connect;
