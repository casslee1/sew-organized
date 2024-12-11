import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [preferredUnits, setPreferredUnits] = useState(null);

  return (
    <UserContext.Provider
      value={{ userID, setUserID, preferredUnits, setPreferredUnits }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
