import React from "react";
import { useNavigate,Navigate, Route, Routes} from "react-router-dom";
import Button from "./Button";

const NestedRoutes = () => {
    const navigate=useNavigate()
    
    // const status = 404

    // if (status === 404) {
    //     return <Navigate to="/notfound" />
    // }




  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>Home</button>
      <Routes>
        <Route path="firstComp" element={<div>firstComp</div>} />
      </Routes>
    </>
  );
};

export default NestedRoutes;
