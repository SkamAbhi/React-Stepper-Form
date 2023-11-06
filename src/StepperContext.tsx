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
  images: [];
}

interface StepperContextType {
  currentStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  finalData: UserData[];
  setFinalData: Dispatch<SetStateAction<UserData[]>>;
  uploadedFiles: File[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  handleFileUpload: (files: File[]) => void;
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
}): React.ReactElement => {
  const [currentStep, setStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    fatherName: "",
    lastName: "",
    city: "",
    district: "",
    state: "",
    images: [],
  });
  const [finalData, setFinalData] = useState<UserData[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  function handleFileUpload(files: File[]) {
    const uploadedImages: string[] = [];

    files.forEach((file) => {
      const imageUrl = URL.createObjectURL(file);
      uploadedImages.push(imageUrl);
    });

    setUploadedFiles(files);
  }
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
        uploadedFiles,
        setUploadedFiles,
        handleFileUpload,
        submitData,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
export { StepperContext };
