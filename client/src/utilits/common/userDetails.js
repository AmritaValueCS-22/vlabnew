import { getValue } from "../../helpers/localStorage";

const userRoleDetails = () => {
  const userRole = getValue("userRole");
  let role = "";

  if (userRole === "1") {
    role = "ADMIN";
  } else if (userRole === "2") {
    role = "SME";
  } else if (userRole === "3") {
    role = "NCI";
  } else if (userRole === "4") {
    role = "GUEST";
  }
  return role;
};
const userRoleForAdmin = (userRole) => {
  let role = "4";

  if (userRole === "1") {
    role = "ADMIN";
  } else if (userRole === "2") {
    role = "SME";
  } else if (userRole === "3") {
    role = "NCI";
  } else if (userRole === "4") {
    role = "GUEST";
  }
  return role;
};
const roleToNumber = (userRole) => {
  let role = "4";

  if (userRole === "ADMIN") {
    role = "1";
  } else if (userRole === "SME") {
    role = "2";
  } else if (userRole === "NCI") {
    role = "3";
  } else if (userRole === "GUEST") {
    role = "4";
  }
  return role;
};
export { userRoleDetails, userRoleForAdmin, roleToNumber };
