import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  wigetPosition: Yup.array()
    .min(1, "At least one choice must be selected")
    .required("Required"),
});
