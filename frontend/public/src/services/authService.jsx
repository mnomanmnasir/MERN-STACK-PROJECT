import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authAction";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !role || !password) {
      return alert("Please provide all fields");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organizationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister(
        {name,
        role,
        email,
        password,
        phone,
        organizationName,
        address,
        hospitalName,
        website}
      )
    );
  } catch (error) {
    console.log(error);
  }
};
