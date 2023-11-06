import React from "react";
import { useStepper } from "../../StepperContext";
import { useStyletron } from "baseui";
import { FileUploader } from "baseui/file-uploader";
import CustomButton from "../../ReusableElements/Button";

function PicUpload() {
  const { setStep, submitData, handleFileUpload, uploadedFiles } = useStepper();
  const [css] = useStyletron();

  const handleDrop = (acceptedFiles: File[], rejectedFiles: File[]) => {
    handleFileUpload(acceptedFiles);
  };

  return (
    <div>
      <FileUploader
        onDrop={(acceptedFiles: File[], rejectedFiles: File[]) =>
          handleDrop(acceptedFiles, rejectedFiles)
        }
      />
      <div className={css({ marginTop: "20px" })}>
        <h2>Uploaded Files:</h2>
        <div className={css({ display: "flex", flexWrap: "wrap" })}>
          {uploadedFiles.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{ width: "100px", height: "100px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
        })}
      >
        <CustomButton
          name={"Submit"}
          to={"/preview"}
          onClick={() => {
            submitData();
            setStep(3);
          }}
        />
        <CustomButton name={"Back"} to={"/"} onClick={() => setStep(0)} />
      </div>
    </div>
  );
}

export default PicUpload;
