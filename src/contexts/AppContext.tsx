import { createContext } from "react";
import { AppContextTypes } from "./AppContext.types";

const AppContext = createContext<AppContextTypes.Model>(
  {} as AppContextTypes.Model
);

export default AppContext;
