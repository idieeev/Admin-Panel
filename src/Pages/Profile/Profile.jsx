import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch()
  const product = useSelector((state)=>state.profile.product)
  return (
    <div>
      
    </div>
  );
};

export default Profile;
