import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import AuthProvider from "./components/Utilities/AuthContext.tsx";
import { initCSRF } from "./components/Utilities/api.tsx";

async function bootstrap() {
  await initCSRF();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
);

}

bootstrap().catch(console.error);
