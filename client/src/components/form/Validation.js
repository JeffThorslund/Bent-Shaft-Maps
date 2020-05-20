import * as yup from "yup"; // for everything

export const validate = (name) => {
  let str;
  if (document.getElementsByTagName("input")[name] != null) {
    str = document.getElementsByTagName("input")[name].getAttribute("value");
  } else {
    str = null;
  }
  console.log(name, str);
  if (/BOI/g.test(str)) {
    console.log("great");
    return "great!";
  } else if (str == null) {
    console.log("null");
    return "null";
  } else {
    console.log("yikes");
    return "yikes";
  }

  /*let positionSchema = yup.number.min(0).max(100);
  let pointerSchema = string().matches(/^\d{1,3},(?:\d){1,3}$)/g);
  let xSchema = yup.number.min(0).max(1600);
  let ySchema = yup.number.min(0).max(900);
  let rotationSchema = yup.number.min(0).max(360);
  let rangeSchema = string().matches(/^-?\d{1,8},-?(?:\d){1,8}$/);*/
};
