import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./Components/Name";
import { useStyletron } from "styletron-react";
import Address from "./Components/Address";
import Stepper from "./Components/Stepper";
import { StepperProvider } from "./StepperContext";
import Preview from "./Components/Preview";

function App() {
  const [css] = useStyletron();
  return (
    <StepperProvider>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          margin: "40px auto",
        })}
      >
        StepperForm
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        })}
      >
        <Stepper />
        <Router>
          <div className={css({})}>
            <Routes>
              <Route path="/" element={<Name />} />
              <Route path="/address" element={<Address />} />
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
        </Router>
      </div>
    </StepperProvider>
  );
}

export default App;
