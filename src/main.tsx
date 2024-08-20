import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      publishableKey={PUBLISHABLE_KEY}
    >
    <App />
    </ClerkProvider>
  </StrictMode>
);