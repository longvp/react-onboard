import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Button,
  ButtonGroup,
  Layout,
  AppProvider as PolarisAppProvider,
} from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import polarisTranslations from "@shopify/polaris/locales/en.json";
import { Form, Formik, FormikProps } from "formik";
import { useEffect, useRef, useState } from "react";
import { IFormValues } from "~/models";
import {
  CALENDAR_LANGUAGE_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FIRST_DAY_OF_CALENDAR_OPTIONS,
  LAYOUT_OPTIONS,
} from "~/utilities/constants";
import { DeliverySchema, FormSchema, StoreSchema } from "~/validations";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";
import WidgetAppearanceSection from "./widget-appearance-section";
import WidgetPositionSection from "./widget-position-section";
import WidgetTextSection from "./widget-text-section";
import moment from "moment";
import * as Yup from "yup";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login), polarisTranslations });
};

export default function App() {
  const { polarisTranslations } = useLoaderData<typeof loader>();
  const formikRef = useRef<FormikProps<IFormValues>>(null);

  const [initialValues, setInitialValues] = useState<IFormValues>({
    widgetPosition: [],
    layout: LAYOUT_OPTIONS[0].value,
    calendarLanguage: CALENDAR_LANGUAGE_OPTIONS[0].value,
    date: moment("05/06/2024").format(DATE_FORMAT_OPTIONS[0].value),
    titleColor: "#DD1313",
    calendarLayout: LAYOUT_OPTIONS[0].value,
    alwaysOpenCalendar: false,
    firstDayOfCalendar: FIRST_DAY_OF_CALENDAR_OPTIONS[0].value,
    themeColor: "#DD1313",
    messageTextColor: "#DD1313",
    delivery: {
      title: "",
      deliveryDateLabel: "",
      deliveryDateTitle: "",
      deliveryTimeTitle: "",
      messageText: "",
    },
    store: {
      storePickup: "",
      storage: "",
      pickupDate: "",
      pickupTime: "",
      messageText: "",
    },
  });

  const [isChangeValue, setIsChangeValue] = useState(false);
  const [activeTab, setActiveTab] = useState("delivery");
  const [validationSchema, setValidationSchema] = useState(FormSchema);

  const handleDiscard = () => {
    formikRef?.current?.resetForm();
  };

  const handleSubmit = (values: IFormValues) => {
    console.log("data: ", values);
    setIsChangeValue(false);
    setInitialValues(values);
  };

  useEffect(() => {
    if (activeTab === "delivery") {
      const newValidationSchema = FormSchema.concat(
        Yup.object().shape({
          delivery: DeliverySchema,
        }),
      );
      setValidationSchema(newValidationSchema);
    } else if (activeTab === "store") {
      const newValidationSchema = FormSchema.concat(
        Yup.object().shape({
          store: StoreSchema,
        }),
      );
      setValidationSchema(newValidationSchema);
    }
  }, [activeTab]);

  return (
    <PolarisAppProvider i18n={polarisTranslations}>
      {isChangeValue && (
        <div className={styles.header}>
          <span className={styles.unsavedChangeText}>Unsaved Change</span>
          <ButtonGroup>
            <div className={styles.buttonDiscard}>
              <Button onClick={() => handleDiscard()}>Discard</Button>
            </div>
            <div className={styles.buttonSave}>
              <Button onClick={() => formikRef?.current?.submitForm()}>
                Save
              </Button>
            </div>
          </ButtonGroup>
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.heading}>Widget Setting</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={handleSubmit}
          innerRef={formikRef}
          enableReinitialize
        >
          {({ values, initialValues, setFieldValue, errors, touched }) => {
            if (JSON.stringify(values) !== JSON.stringify(initialValues))
              setIsChangeValue(true);
            else setIsChangeValue(false);

            return (
              <Form>
                <Layout>
                  <Layout.Section>
                    <WidgetPositionSection
                      values={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                    />
                  </Layout.Section>
                  <Layout.Section>
                    <WidgetAppearanceSection
                      values={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      initialValues={initialValues}
                    />
                  </Layout.Section>
                  <Layout.Section>
                    <WidgetTextSection
                      values={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </Layout.Section>
                </Layout>
              </Form>
            );
          }}
        </Formik>
      </div>
    </PolarisAppProvider>
  );
}
