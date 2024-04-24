import * as Yup from "yup";
import { emailRegex, fullNameRegex, phoneRegex } from "@/src/utils";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .matches(fullNameRegex, "Wrong Fullname")
    .required("Fullname is required"),
  email: Yup.string()
    .matches(emailRegex, "Wrong Email")
    .trim()
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegex, "Wrong Phone")
    .trim()
    .required("Phone is required"),
  message: Yup.string().trim(),
});
