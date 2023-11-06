import * as React from "react";
import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { useStepper } from "../../StepperContext";

function Stepper() {
  const { currentStep } = useStepper();
  return (
    <ProgressSteps
      current={currentStep}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            display: "flex",
          }),
        },
        Tail: {
          style: ({ $theme }) => ({
            display: "none",
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }),
        },
        Content: {
          style: ({ $theme }) => ({
            display: "flex",
            flexDirection: "column",
          }),
        },
      }}
    >
      <NumberedStep title="Personal Details"></NumberedStep>
      <NumberedStep title="Address"></NumberedStep>
      <NumberedStep title="Picture Upload"></NumberedStep>
      <NumberedStep title="Preview"></NumberedStep>
    </ProgressSteps>
  );
}
export default Stepper;
