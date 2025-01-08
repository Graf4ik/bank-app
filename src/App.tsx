import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import { AppLayout } from "./pages/AppLayout/AppLayout"
import { Login } from "./pages/Login/Login"
import {useEffect} from "react";
import authStore from "@/stores/authStore.ts";
import {observer} from "mobx-react-lite";

const App: React.FunctionComponent = observer(() => {
    const navigate = useNavigate();

  return (
    <>
     <Routes>
            <Route path="/" element={authStore.isAuth ? <AppLayout /> : <Navigate to="/login" />} />
            <Route path="/login" element={authStore.isAuth ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </>
  )
});

export default App
