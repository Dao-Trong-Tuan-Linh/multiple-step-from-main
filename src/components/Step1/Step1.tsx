import "./Step1.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../../store/infoStore/InfoContext";
import { useEffect } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};
const nameRegExp = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegExp = /^[0-9+*\-()]+$/;
const schema = yup.object({
  name: yup.string().matches(nameRegExp, "Name is required").required(),
  email: yup.string().matches(emailRegExp, "Email is required").required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is required")
    .required(),
});
const Step1Component = () => {
  const { userInfo, setUserInfo } = useInfo();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    setUserInfo(data);
    navigate("/step2");
  });

  useEffect(() => {
    setValue("name", userInfo?.name ? userInfo.name : "");
    setValue("email", userInfo?.email ? userInfo.email : "");
    setValue("phone", userInfo?.phone ? userInfo.phone : "");
  }, []);
  return (
    <>
      <h1 className="title">Personal info</h1>
      <p className="desc">
        Please provide your name,email address,and phone number
      </p>
      <form onSubmit={onSubmit}>
        <div className="container-field">
          <div className="container-label">
            <label className="label">Name</label>
            <p className="error-text">{errors.name?.message}</p>
          </div>
          <input
            className={`input ${errors.name?.message ? "error" : ""}`}
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name")}
          />
        </div>
        <div className="container-field">
          <div className="container-label">
            <label className="label">Email Address</label>
            <p className="error-text">{errors.email?.message}</p>
          </div>
          <input
            className={`input ${errors.email?.message ? "error" : ""}`}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email")}
          />
        </div>
        <div className="container-field">
          <div className="container-label">
            <label className="label">Phone Number</label>
            <p className="error-text">{errors.phone?.message}</p>
          </div>
          <input
            className={`input ${errors.phone?.message ? "error" : ""}`}
            type="text"
            placeholder="e.g. +1 234 567 890"
            {...register("phone")}
          />
        </div>
        <div className="container-btn">
          <button className="btn">Next Step</button>
        </div>
      </form>
      <footer>
      </footer>
    </>
  );
};

export default Step1Component;
