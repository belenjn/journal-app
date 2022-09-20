import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
        
      /* login and register */
      <Route path="/auth/*" element={<AuthRoutes/>}/>


      /* journal app */
      <Route path="/*" element={<JournalRoutes/>}/>

    </Routes>
  );
};
