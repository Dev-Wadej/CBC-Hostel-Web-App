import { createContext, useReducer, useState } from 'react';

export const UserContext = createContext({
  signupPage1: true,
  signupPage2: false,
  signupPage3: false,
  setSignupPage1: () => {},
  setSignupPage2: () => {},
  setSignupPage3: () => {},
});
export const UserProvider = ({ children }) => {
  const [signupPage1, setSignupPage1] = useState(true);
  const [signupPage2, setSignupPage2] = useState(false);
  const [signupPage3, setSignupPage3] = useState(false);

  const value = {
    signupPage1,
    signupPage2,
    signupPage3,
    setSignupPage1,
    setSignupPage2,
    setSignupPage3,
  };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
