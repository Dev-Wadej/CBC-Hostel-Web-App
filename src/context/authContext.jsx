import { createContext, useState } from 'react';

const defaultFormFields = {
  fullName: '',
  email: '',
  phoneNumber: '',
  hostel: '',
  gender: '',
  maritalStatus: '',
  age: '',
  occupation: '',
  disabilities: '',
  nextOfKinName: '',
  nextOfKinEmail: '',
  nextOfKinPhoneNumber: '',
  userAddress: '',
};
export const AuthContext = createContext({
  formFields: {},
  setFormFields: () => {},
});

export const AuthProvider = ({ children }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log(formFields);
  const value = { formFields, setFormFields };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
