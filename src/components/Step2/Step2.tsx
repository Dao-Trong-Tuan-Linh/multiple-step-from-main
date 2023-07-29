import { useEffect, useState } from "react";
import "./Step2.css";
import { Link } from "react-router-dom";
import { usePlan } from "../../store/planStore/PlanContext";
import {useAddOns} from '../../store/addOnsStore/AddOnsContext'
import { useNavigate,Navigate } from "react-router-dom";
import Swt from '../Swr/SwrComponent'

const planMonth = [
  {
    id:"pm1",
    name: "Arcade",
    img: "/public/images/icon-arcade.svg",
    money: 9,
    type: "mo",
  },
  {
    id:"pm2",
    name: "Advanced",
    img: "/public/images/icon-advanced.svg",
    money: 12,
    type: "mo",
  },
  {
    id:"pm3",
    name: "Pro",
    img: "/public/images/icon-pro.svg",
    money: 15,
    type: "mo",
  },
];

const planYear = [
  {
    id:"py1",
    name: "Arcade",
    img: "/public/images/icon-arcade.svg",
    money: 90,
    type: "yr",
    promotion: "2 months free",
  },
  {
    id:"py2",
    name: "Advanced",
    img: "/public/images/icon-advanced.svg",
    money: 120,
    type: "yr",
    promotion: "2 months free",
  },
  {
    id:"py3",
    name: "Pro",
    img: "/public/images/icon-pro.svg",
    money: 150,
    type: "yr",
    promotion: "2 months free",
  },
];

interface Plan {
  id?:string,
  name?: string;
  money?: number;
  type?: string;
}

type Props = {
  chosePlan:Plan
}

const Step2 = () => {
  
  const navigate = useNavigate();
  const { setChosePlan,chosePlan } = usePlan();
  const {setChoseAddOns} = useAddOns();
  const [isYearly, setIsYearly] = useState(chosePlan.type == 'yr' ? true : false);
  const [planed, setPlaned] = useState<Plan>({});
  useEffect(() => {
    setPlaned({
      id:chosePlan.id ? chosePlan.id : isYearly ? planYear[0].id : planMonth[0].id,
      name: chosePlan.id ? chosePlan.name : isYearly ? planYear[0].name : planMonth[0].name,
      money: chosePlan.id ? chosePlan.money : isYearly ? planYear[0].money : planMonth[0].money,
      type: chosePlan.id ? chosePlan.type : isYearly ? planYear[0].type : planMonth[0].type,
    });
    setChoseAddOns([]);
  }, [isYearly]);

  

  return (
    <>
      <h1 className="title">Select your plan</h1>
      <p className="desc">You have the opinion of month or yearly billing</p>
      <div className="container-plans">
        {isYearly
          ? planYear.map((plan, index) => (
              <button
                onClick={() =>
                  setPlaned({
                    id:plan.id,
                    name: plan.name,
                    money: plan.money,
                    type: plan.type,
                  })
                }
                key={index}
                className={`item-plan ${
                   planed.id == plan.id ? "active" : ""
                }`}
              >
                <img className="img-plan" src={plan.img} />
                <div className="item-plan-desc">
                  <h3 className="item-plan-name">{plan.name}</h3>
                  <span className="item-plan-money">{`${plan.money}/${plan.type}`}</span>
                  <span className="item-plan-promotion">{plan.promotion}</span>
                </div>
              </button>
            ))
          : planMonth.map((plan, index) => (
              <button
                onClick={() =>
                  setPlaned({
                    id:plan.id,
                    name: plan.name,
                    money: plan.money,
                    type: plan.type,
                  })
                }
                key={index}
                className={`item-plan ${
                  planed.id == plan.id ? "active" : ""
                }`}
              >
                <img className="img-plan" src={plan.img} />
                <div className="item-plan-desc">
                  <h3 className="item-plan-name">{plan.name}</h3>
                  <span className="item-plan-money">{`${plan.money}/${plan.type}`}</span>
                </div>
              </button>
            ))}
      </div>

      <div className="container-time">
        <span className={`time ${isYearly ? "" : "active"}`}>Monthly</span>
        <button
          onClick={() => {
            setIsYearly(!isYearly);
          }}
          className="btn-toggle"
        >
          <button className={`circle ${isYearly ? "yearly" : ""}`} />
        </button>
        <span className={`time ${isYearly ? "active" : ""}`}>Yearly</span>
      </div>

      <div className="container-btn">
        <Link className="link-previous" to={"/step1"}>
          Go Back
        </Link>
        <button
          onClick={() => {
            setChosePlan(planed);
            navigate("/step3");
          }}
          className="btn"
        >
          Next Step
        </button>
      </div>
      <footer>
      </footer>
    </>
  );
};

export default Step2;
