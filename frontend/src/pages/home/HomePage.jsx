import React from "react";
import AuthScreen from "./AuthScreen.jsx";
import Homescreen from "./HomeScreen.jsx";
import { useAuthUser } from "../../store/authUser";
const HomePage = () => {
  const { user } = useAuthUser();
  return <div>{user ? <Homescreen /> : <AuthScreen />}</div>;
};

export default HomePage;
