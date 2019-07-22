import React, { lazy, Suspense } from "react";
import "styles/LoginPage.css";

const Login = lazy(() => import("components/Login"));

function LoginPage() {
  return (
    <div className="LoginPage">
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <Login />
      </Suspense>
    </div>
  );
}

export default LoginPage;
