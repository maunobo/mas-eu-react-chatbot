import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={{userName, setUserName}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;