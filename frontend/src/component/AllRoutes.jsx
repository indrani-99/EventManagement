import Events from "./Events";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
