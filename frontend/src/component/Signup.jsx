import { useState } from "react";
import axios from "axios";
import { Box, Input, Button , Heading} from "@chakra-ui/react";

function Signup() {
  const baseUrl = "https://eventmanagement-1-8t37.onrender.com";
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const handleSignUp = async () => {
    let res = await axios.post(`${baseUrl}/user/register`, {
      email,
      password,
      username,
    });
    alert(res.data.message);
  };
  return (
    <>
     <Heading as='h3' textAlign={'center'} p={5}> Signup</Heading>
      <Box>
        <Input
          placeholder="Enter username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <Input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Register</Button>
      </Box>
    </>
  );
}

export default Signup;
