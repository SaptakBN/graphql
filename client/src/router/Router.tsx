import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Home } from "@/pages";
import { Loader } from "@/components";

export const Router = () => {
  const router = (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  return router;
};
