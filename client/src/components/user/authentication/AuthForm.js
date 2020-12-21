import React from "react";
import { useForm } from "react-hook-form";

const AuthForm = ({ formData }) => {
  console.log(formData);

  return formData.title;
};

export default AuthForm;
