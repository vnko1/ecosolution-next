import * as Yup from "yup";
import { fullNameRegex, phoneRegex } from "@/utils";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(fullNameRegex, "Wrong Fullname")
    .required("Fullname is required")
    .trim(),
  email: Yup.string().email("Wrong Email").required("Email is required").trim(),
  phone: Yup.string()
    .matches(phoneRegex, "Wrong Phone")

    .required("Phone is required")
    .trim(),
  message: Yup.string().trim().optional(),
});
