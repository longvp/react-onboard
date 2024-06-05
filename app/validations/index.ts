import * as Yup from "yup";
import { HEX_COLOR_REGEX } from "~/utilities/constants";

export const DeliverySchema = Yup.object().shape({
  title: Yup.string().required("This field is required!"),
  deliveryDateLabel: Yup.string().required("This field is required!"),
  deliveryDateTitle: Yup.string().required("This field is required!"),
  deliveryTimeTitle: Yup.string().required("This field is required!"),
  messageText: Yup.string().required("This field is required!"),
});

export const StoreSchema = Yup.object().shape({
  storePickup: Yup.string().required("This field is required!"),
  storage: Yup.string().required("This field is required!"),
  pickupDate: Yup.string().required("This field is required!"),
  pickupTime: Yup.string().required("This field is required!"),
  messageText: Yup.string().required("This field is required!"),
});

export const FormSchema = Yup.object().shape({
  widgetPosition: Yup.array()
    .min(1, "At least one choice must be selected!")
    .required("This field is required!"),
  layout: Yup.string().required("This field is required!"),
  calendarLanguage: Yup.string().required("This field is required!"),
  date: Yup.string().required("This field is required!"),
  titleColor: Yup.string()
    .matches(HEX_COLOR_REGEX, "Invalid HEX color")
    .required("This field is required!"),
  calendarLayout: Yup.string().required("This field is required!"),
  firstDayOfCalendar: Yup.string().required("This field is required!"),
  themeColor: Yup.string()
    .matches(HEX_COLOR_REGEX, "Invalid HEX color")
    .required("This field is required!"),
  messageTextColor: Yup.string()
    .matches(HEX_COLOR_REGEX, "Invalid HEX color")
    .required("This field is required!"),
});
