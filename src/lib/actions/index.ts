"use server";
import { FormValues } from "@/types";

export const submitHandler = async (data: FormValues) => {
  console.log("🚀 ~ submitHandler ~ data:", data);
};
