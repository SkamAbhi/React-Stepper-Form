import CustomButton from "../../ReusableElements/Button";
import CustomInput from "../../ReusableElements/Input";
import { useStyletron } from "baseui";
import { useStepper } from "../../StepperContext";

export default function Address() {
  const [css] = useStyletron();
  const { setStep, userData, setUserData } = useStepper();

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h1>Add address</h1>
      <CustomInput
        placeholder={""}
        onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        label={"City"}
        value={userData["city"]}
      />
      <CustomInput
        placeholder={""}
        onChange={(e) => setUserData({ ...userData, district: e.target.value })}
        label={"District"}
        value={userData["district"]}
      />
      <CustomInput
        placeholder={""}
        onChange={(e) => setUserData({ ...userData, state: e.target.value })}
        label={"State"}
        value={userData["state"]}
      />

      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        })}
      >
        <CustomButton
          name={"Next"}
          to={"/pictureupload"}
          onClick={() => {
            setStep(2);
          }}
        />
        <CustomButton name={"Back"} to={"/"} onClick={() => setStep(0)} />
      </div>
    </div>
  );
}
