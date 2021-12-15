import api from "../api";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  return api.post("/user/signup", data);
};

export const signIn = async (data: SignInData) => {
  return api.post("/user/signin", data);
};

export const me = async () => {
  return api.get("/user/me");
};
