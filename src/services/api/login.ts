import axios from "axios";
interface LoginData {
  username: string;
  password: string;
}

export default async function authenticate(user: LoginData) {
  const res = await axios.post("https://fakestoreapi.com/auth/login", user);
  return res.data;
}
