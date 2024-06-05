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
import { useMemo, useRef } from "react";
import { IFormValues } from "~/models";
import {
  CALENDAR_LANGUAGE_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FIRST_DAY_OF_CALENDAR_OPTIONS,
  LAYOUT_OPTIONS,
} from "~/utilities/constants";
import { FormSchema } from "~/validations";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";
import WidgetAppearanceSection from "./widget-appearance-section";
import WidgetPositionSection from "./widget-position-section";
import WidgetTextSection from "./widget-text-section";

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
  const initialValues: IFormValues = useMemo(() => {
    return {
      widgetPosition: [],
      layout: LAYOUT_OPTIONS[0].value,
      calendarLanguage: CALENDAR_LANGUAGE_OPTIONS[0].value,
      date: DATE_FORMAT_OPTIONS[0].value,
      titleColor: "#303030",
      calendarLayout: LAYOUT_OPTIONS[0].value,
      alwaysOpenCalendar: false,
      firstDayOfCalendar: FIRST_DAY_OF_CALENDAR_OPTIONS[0].value,
      themeColor: "#2E85FF",
      messageTextColor: "#f62369",
    };
  }, []);

  // const handleDiscard = () => {
  //   formikRef?.current?.resetForm();
  // };

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <PolarisAppProvider i18n={polarisTranslations}>
      <div className={styles.header}>
        <span className={styles.unsavedChangeText}>Unsaved Change</span>
        <ButtonGroup>
          <div className={styles.buttonDiscard}>
            <Button>Discard</Button>
          </div>
          <div className={styles.buttonSave}>
            <Button onClick={() => formikRef?.current?.submitForm()}>
              Save
            </Button>
          </div>
        </ButtonGroup>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>Widget Setting</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          validateOnChange={true}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          {({
            handleChange,
            handleBlur,
            values,
            setFieldValue,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form>
              <Layout>
                <Layout.Section>
                  <WidgetPositionSection
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                  />
                </Layout.Section>
                <Layout.Section>
                  <WidgetAppearanceSection
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />
                </Layout.Section>
                <Layout.Section>
                  <WidgetTextSection
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />
                </Layout.Section>
              </Layout>
            </Form>
          )}
        </Formik>
      </div>
    </PolarisAppProvider>
  );
}
