import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InfoProvider } from "./store/infoStore/InfoProvider.tsx";
import { PlanProvider } from "./store/planStore/PlanProvider.tsx";
import { AddOnsProvider } from "./store/addOnsStore/AddOnsProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InfoProvider>
      <PlanProvider>
        <AddOnsProvider>
          <App />
        </AddOnsProvider>
      </PlanProvider>
    </InfoProvider>
  </React.StrictMode>
);
