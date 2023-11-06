import CustomInput from "../../ReusableElements/Input";
import { useStyletron } from "styletron-react";
import CustomButton from "../../ReusableElements/Button";
import { useStepper } from "../../StepperContext";

const Name = () => {
  const [css] = useStyletron();
  const { setStep, userData, setUserData } = useStepper();
  const handleNextClick = () => {
    setStep(1);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          fontSize:"25px",
          marginBottom:'20px'
        })}
      >
        Personal Details
      </div>
      <form>
        <CustomInput
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          placeholder={""}
          label={"First Name"}
          value={userData["firstName"]}
        />
        <CustomInput
          onChange={(e) =>
            setUserData({ ...userData, fatherName: e.target.value })
          }
          placeholder={""}
          label={`Father's Name`}
          value={userData["fatherName"]}
        />
        <CustomInput
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          placeholder={``}
          label={"Last Name"}
          value={userData["lastName"]}
        />
        <div className={css({
          display:'flex',
          justifyContent:'center'
        })}>
        <CustomButton name="Next" onClick={handleNextClick} to={"/address"} />
        </div>
      </form>
    </div>
  );
};

export default Name;
