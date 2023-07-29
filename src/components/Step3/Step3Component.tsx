import { useState } from "react";
import { usePlan } from "../../store/planStore/PlanContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAddOns} from "../../store/addOnsStore/AddOnsContext"
import './Step3Component.css'

type AddOns = {
  id?:string,
  name?:string,
  desc?:string,
  money?:number,
  type?:string
}
const addOnsMonth = [
  {
    id:"aom1",
    name:"Online service",
    desc:"Access to multiplayer games",
    money:1,
    type:"mo"
  },
  {
    id:"aom2",
    name:"Larger storage",
    desc:"Extra 1TB of cloud save",
    money:2,
    type:"mo"
  },
  {
    id:"aom3",
    name:"Customizable profile",
    desc:"Custom theme on your profile",
    money:2,
    type:"mo"
  }
]

const addOnsYear = [
  {
    id:"aoy1",
    name:"Online service",
    desc:"Access to multiplayer games",
    money:10,
    type:"yr"
  },
  {
    id:"aoy2",
    name:"Larger storage",
    desc:"Extra 1TB of cloud save",
    money:20,
    type:"yr"
  },
  {
    id:"aoy3",
    name:"Customizable profile",
    desc:"Custom theme on your profile",
    money:20,
    type:"yr"
  }
]
const Step3Component = () => {
    const navigate = useNavigate();
  const { chosePlan } = usePlan();
  const {setChoseAddOns,choseAddOns} = useAddOns();
  const [addOns,setAddOns] = useState<AddOns[]>(choseAddOns);
  
  return (
    <>
      <h1 className="title">Pick add-ons</h1>
      <p className="desc">Add-ons help enhance your gaming experience</p>

      <div className="container-addOns">
        {chosePlan.type == 'mo' ? addOnsMonth.map((item,index) => (
          <div key={index} className={addOns.some((value) => value.id == item.id) ? "item-addOns active" : "item-addOns"}>
          <div className="item-addOns-left">
              <input className="check-box" checked={addOns.some((value) => value.id == item.id) ? true : false} type="checkbox" onChange={() => {addOns.some((value) => value.id == item.id) ? setAddOns(addOns.filter((value) => value.id != item.id)) : setAddOns([...addOns,item])}}/>
              <div>
                  <h3 className="item-addOns-name">{item.name}</h3>
                  <span className="item-addOns-desc">{item.desc}</span>
              </div>
          </div>
          <span className="item-addOns-sale">{`+$${item.money}/${item.type}`}</span>
      </div>
        )) : chosePlan.type == 'yr' ? addOnsYear.map((item,index) => (
          <div key={index} className={addOns.some((value) => value.id == item.id) ? "item-addOns active" : "item-addOns"}>
          <div className="item-addOns-left">
              <input className="check-box" checked={addOns.some((value) => value.id == item.id) ? true : false} type="checkbox" onChange={() => {addOns.some((value) => value.id == item.id) ? setAddOns(addOns.filter((value) => value.id != item.id)) : setAddOns([...addOns,item])}}/>
              <div>
                  <h3 className="item-addOns-name">{item.name}</h3>
                  <span className="item-addOns-desc">{item.desc}</span>
              </div>
          </div>
          <span className="item-addOns-sale">{`+$${item.money}/${item.type}`}</span>
      </div>
        )) : ''}
      </div>
      <div className="container-btn">
        <Link className="link-previous" to={"/step2"}>
          Go Back
        </Link>
        <button
          onClick={() => {
            setChoseAddOns(addOns)
            navigate("/step4");
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

export default Step3Component;
