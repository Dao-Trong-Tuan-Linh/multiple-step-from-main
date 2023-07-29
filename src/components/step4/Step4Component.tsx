import { useState } from "react";
import { usePlan } from "../../store/planStore/PlanContext";
import { useAddOns } from "../../store/addOnsStore/AddOnsContext";
import { Link } from "react-router-dom";
import "./Step4Component.css";
const Step4Component = () => {
  const { chosePlan } = usePlan();
  const { choseAddOns } = useAddOns();
  const [isConfirm, setIsConfirm] = useState(false);
  
  const totalAddOns = choseAddOns.reduce((pre,cur) => cur.money ? pre + cur.money : pre,0)
  
  const totalMoney = Number(chosePlan.money) + totalAddOns
  console.log(totalMoney)
  return isConfirm ? (
    <div className="container-complete">
      <img src='/public/images/icon-thank-you.svg' />
      <h1 className="thank-you">Thank you</h1>
      <p className="description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  ) : (
    <>
      <h1 className="title">Finishing up</h1>
      <p className="desc">Double-check everything looks OK before confirming</p>

      <div className="container-finishingUp">
        <div className="container-plan">
          <div className="container-plan--left">
            <h3 className="plan-name">
              {chosePlan.type == "mo"
                ? `${chosePlan?.name ?? ''}(Monthly)`
                : chosePlan.type == "yr"
                ? `${chosePlan?.name ?? ''}(Yearly)`
                : ""}
            </h3>
            <Link className="change-link" to="/step2">
              Change
            </Link>
          </div>
          <h3 className="plan-money">
            {`$${chosePlan?.money ?? ''}/${chosePlan?.type ?? ''}`}
          </h3>
        </div>

        <div className="container-addOns">
          {choseAddOns.map((addOn) => (
            <div className="item-addOn">
              <span className="item-addOn--name">{addOn.name}</span>
              <span className="item-addOn--money">{`+$${addOn.money ?? ''}/${addOn.type ?? ''}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container-total">
        <span className="total-title">Total</span>
        <h3 className="total-value">{`$${totalMoney}/${chosePlan.type ?? ''}`}</h3>
      </div>
      <div className="container-btn">
        <Link className="link-previous" to={"/step3"}>
          Go Back
        </Link>
        <button
          onClick={() => {
            setIsConfirm(true);
            // navigate("/step4");
          }}
          className="btn"
        >
          Confirm
        </button>
      </div>
      <footer>
      </footer>
    </>
  );
};

export default Step4Component;
