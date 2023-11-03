import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface UserData {
  firstName: string;
  fatherName: string;
  lastName: string;
  city: string;
  district: string;
  state: string;
}

interface StepperContextType {
  currentStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  finalData: UserData[];
  setFinalData: Dispatch<SetStateAction<UserData[]>>;
  submitData: () => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepper = (): StepperContextType => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};

interface StepperProviderProps {
  children: ReactNode;
}

export const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
}) => {
  const [currentStep, setStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    fatherName: "",
    lastName: "",
    city: "",
    district: "",
    state: "",
  });
  const [finalData, setFinalData] = useState<UserData[]>([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
  }
  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
