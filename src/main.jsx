import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/style.css";

import { GlobalProvider } from "./context/GlobalState";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
