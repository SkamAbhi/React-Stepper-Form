import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./Components/Name";
import { useStyletron } from "styletron-react";
import Address from "./Components/Address";
import Stepper from "./Components/Stepper";
import { StepperProvider } from "./StepperContext";
import Preview from "./Components/Preview";
import PicUpload from "./Components/PicUpload";

function App() {
  const [css] = useStyletron();
  return (
    <StepperProvider>
      <div className={css({
         display:'flex',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',
         marginTop:'50px'
      })}>
      <div
       className={css({
       border: "2px solid black",
       borderRadius:'30px',
       maxWidth:'1000px',
       padding:'10px'
      })}>
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        })}
      >
        <div>
          <Stepper />
        </div>
        <Router>
          <div className={css({})}>
            <Routes>
              <Route path="/" element={<Name />} />
              <Route path="/address" element={<Address />} />
              <Route path="/pictureupload" element={<PicUpload />} />
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
        </Router>
      </div>
      </div>
      </div>
    </StepperProvider>
  );
}

export default App;
