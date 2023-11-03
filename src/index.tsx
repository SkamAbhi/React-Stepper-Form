import React from "react";
import ReactDOM from "react-dom/client";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import App from "./App";
import { StepperProvider } from "./StepperContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const engine = new Styletron();
root.render(
  <StepperProvider>
    <React.StrictMode>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </React.StrictMode>
  </StepperProvider>
);
