import { fakeAuth } from "../../../fakeAuth/login";

export const fakeauth = (email, password) => {
  // The `extraArgument` is the third arg for thunk functions
  return (dispatch, getState, api) => {
    // you can use api here
    fakeAuth(email, password)
      .then((data) => {
        localStorage.setItem("sessionID", data.token);
        dispatch({
          type: "LOGIN_ACTION",
          payload: {
            isLogin: true,
            errMessage: "",
            userDetails: {
              name: data.payload.name,
              accountType: data.payload.role,
            },
          },
        });
      })
      .catch((msg) => {
        dispatch({
          type: "LOGIN_ACTION",
          payload: {
            isLogin: false,
            errMessage: msg,
          },
        });
      });
  };
};
