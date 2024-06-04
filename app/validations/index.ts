import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  widgetPosition: Yup.array()
    .min(1, "At least one choice must be selected!")
    .required("This field is required!"),
  layout: Yup.string().required("This field is required!"),
  calendarLanguage: Yup.string().required("This field is required!"),
  date: Yup.string().required("This field is required!"),
  titleColor: Yup.string().required("This field is required!"),
  calendarLayout: Yup.string().required("This field is required!"),
  firstDayOfCalendar: Yup.string().required("This field is required!"),
  themeColor: Yup.string().required("This field is required!"),
  messageTextColor: Yup.string().required("This field is required!"),
});
