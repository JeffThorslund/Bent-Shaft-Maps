import * as yup from 'yup'; // for everything

let stringSchema = yup.string()

let positionSchema = yup.number.min(0).max(100)

let pointerSchema = string().matches(/^[1-9]\d{1,2}(?:,[1-9]\d){1,2}$/);
