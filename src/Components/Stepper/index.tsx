import * as React from "react";
import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { useStepper } from "../../StepperContext";

function Stepper() {
  const { currentStep } = useStepper();
  return (
    <ProgressSteps current={currentStep}>
      <NumberedStep title="Personal Details"></NumberedStep>
      <NumberedStep title="Address"></NumberedStep>
      <NumberedStep title="Preview"></NumberedStep>
    </ProgressSteps>
  );
}
export default Stepper;
