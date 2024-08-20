import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SignInPage from "./_auth/pages/sign-in";
import SignUpPage from "./_auth/pages/sign-up";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Route>

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route path="/" index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
