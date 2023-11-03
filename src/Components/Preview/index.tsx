import CustomButton from "../../ReusableElements/Button";
import { useStepper } from "../../StepperContext";
import { useStyletron } from "baseui";
import { MessageCard } from "baseui/message-card";

function Preview() {
  const { setStep, finalData, setUserData } = useStepper();
  const [css] = useStyletron();

  const resetForm = () => {
    setUserData({
      firstName: "",
      fatherName: "",
      lastName: "",
      city: "",
      district: "",
      state: "",
    });
    setStep(1);
  };

  const renderedData = finalData.map((data, index) => (
    <div key={index}>

  <div
  className={css({
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    minWidth: '500px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  })}
>
  <p
    className={css({
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    })}
  >
    Name: {`${data.firstName} ${data.fatherName} ${data.lastName}`}
  </p>
  <h5
    className={css({
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '5px',
    })}
  >
    City:
  </h5>
  <p
    className={css({
      fontSize: '1rem',
      marginBottom: '10px',
    })}
  >
    {data.city}
  </p>
  <h5
    className={css({
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '5px',
    })}
  >
    State:
  </h5>
  <p
    className={css({
      fontSize: '1rem',
      marginBottom: '10px',
    })}
  >
    {data.state}
  </p>
  <h5
    className={css({
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '5px',
    })}
  >
    District:
  </h5>
  <p
    className={css({
      fontSize: '1rem',
      marginBottom: '0',
    })}
  >
    {data.district}
  </p>
</div>

    </div>
  ));

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      {renderedData}
      <div
        className={css({
          display: "flex",
          gap: "50px",
        })}
      >
        <CustomButton
          name={"Back"}
          to={"/address"}
          onClick={() => setStep(1)}
        />
        <CustomButton name={"New Form"} to={"/"} onClick={resetForm} />
      </div>
    </div>
  );
}

export default Preview;
