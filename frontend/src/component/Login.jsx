import { useState } from "react";
import axios from "axios";
import { Box, Input, Button,Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const baseUrl = "https://eventmanagement-1-8t37.onrender.com";
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const handleLogin = async () => {
    let res = await axios.post(`${baseUrl}/user/login`, {
      email,
      password,
    });
    if (res.status == 200) {
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/");
    } else {
      console.log(res);
      alert("Please enter valid credential");
    }
  };
  return (
    <>
    <Heading as='h3' textAlign={'center'} p={5}> Login</Heading>
      <Box>
        <Input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Box>
    </>
  );
}

export default Login;
