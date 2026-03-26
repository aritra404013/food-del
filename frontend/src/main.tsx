import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import "leaflet/dist/leaflet.css";
import { SocketProvider } from "./context/SocketContext.tsx";

export const authService = "https://api.saffronsky.online";
export const restaurantService = "https://api.saffronsky.online";
export const utilsService = "https://api.saffronsky.online";
export const realtimeService = "https://api.saffronsky.online";
export const riderService = "https://api.saffronsky.online";
export const adminService = "https://api.saffronsky.online";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="356850748294-bmbc69p4a15bl64nbr3hj9ermrffsbq6.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
