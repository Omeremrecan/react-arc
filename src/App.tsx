import AppContext from "contexts/AppContext";
import { AppContextTypes } from "contexts/AppContext.types";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

const App = () => {
  const [appContextModal, setAppContextModal] = useState<AppContextTypes.Model>(
    {
      colors: {
        main: "#ffffff",
        primary: "#2196f3",
        info: "#48cae4",
        danger: "#f44336",
        secondary: "#f50057",
        warning: "#ffc107",
        success: "#4caf50",
        border: "#e2e2e2"
      },
    }
  );

  return (
    <AppContext.Provider value={appContextModal}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
