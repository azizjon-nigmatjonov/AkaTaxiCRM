import requestAuth from "../../utils/requestAuth";
const authService = {
  loginFn: (data: any) => requestAuth.post("/login", data)
};

export default authService;
