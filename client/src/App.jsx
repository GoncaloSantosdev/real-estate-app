// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import {
  HomeScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens";
// Components
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
