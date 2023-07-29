import {useState,useEffect} from "react";
import "./DefaultLayout.css";
import { useLocation } from 'react-router-dom';

interface DefaultLayoutProps {
  children: React.ReactNode;
}


const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [link,setLink] = useState('/step1')
  const location = useLocation();
  useEffect(() => {
    console.log(location)
    setLink(location.pathname)
  },[location])
  return (
    <div className="background">
      <div className="container">
        <div className="header">
          <ul className="container-process">
            <li className="item">
              <div className={`item-circle ${link == '/step1' ? 'active' : ''}`}>1</div>
              <div className="item-desc">
                <span className="item-desc-step">step1</span>
                <span className="item-desc-info">your info</span>
              </div>
            </li>

            <li className="item">
              <div className={`item-circle ${link == '/step2' ? 'active' : ''}`}>2</div>
              <div className="item-desc">
                <span className="item-desc-step">step2</span>
                <span className="item-desc-info">select plan</span>
              </div>
            </li>

            <li className="item">
              <div className={`item-circle ${link == '/step3' ? 'active' : ''}`}>3</div>
              <div className="item-desc">
                <span className="item-desc-step">step3</span>
                <span className="item-desc-info">add-ons</span>
              </div>
            </li>

            <li className="item">
              <div className={`item-circle ${link == '/step4' ? 'active' : ''}`}>4</div>
              <div className="item-desc">
                <span className="item-desc-step">step4</span>
                <span className="item-desc-info">summary</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="content">{children}</div>
        
      </div>
    </div>
  );
};

export default DefaultLayout;
