import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Box,
  Button,
  ButtonGroup,
  FormLayout,
  Icon,
  InlineStack,
  Layout,
  AppProvider as PolarisAppProvider,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { PaintBrushFlatIcon, TextIcon } from "@shopify/polaris-icons";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import polarisTranslations from "@shopify/polaris/locales/en.json";
import { Form, Formik, FormikProps } from "formik";
import { useCallback, useRef } from "react";
import { Collapse } from "~/components";
import {
  FIRST_DAY_OF_CALENDAR_OPTIONS,
  LANGUAGE_OPTIONS,
  LAYOUT_OPTIONS,
} from "~/constants";
import { IFormValues } from "~/models";
import { FormSchema } from "~/validation";
import { login } from "../../shopify.server";
import WigetPositionSection from "./WigetPositionSection";
import styles from "./styles.module.css";

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

  const handleDiscard = useCallback(() => {
    formikRef?.current?.resetForm();
  }, []);

  const handleSubmit = useCallback((values: IFormValues) => {
    console.log(values);
  }, []);

  return (
    <PolarisAppProvider i18n={polarisTranslations}>
      {/* <Page fullWidth > */}
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
        <h3 className={styles.heading}>Wiget Setting</h3>
        <Formik
          initialValues={{}}
          validationSchema={FormSchema}
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
          }) => (
            <Form>
              <Layout>
                <WigetPositionSection
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
                <Layout.Section>
                  <Collapse
                    title={
                      <Box paddingBlockEnd="400">
                        <InlineStack>
                          <Icon source={PaintBrushFlatIcon} tone="critical" />
                          <Text as="span" tone="critical">
                            Widget Appearance
                          </Text>
                        </InlineStack>
                      </Box>
                    }
                  >
                    <Layout>
                      <Layout.Section variant="oneThird">
                        <FormLayout>
                          <Select label="Layout" options={LAYOUT_OPTIONS} />
                          <Select
                            label="Calendar language"
                            options={LANGUAGE_OPTIONS}
                          />
                          <Select
                            label="Date format"
                            options={LANGUAGE_OPTIONS}
                          />
                          <TextField label="Title color" autoComplete="off" />
                        </FormLayout>
                      </Layout.Section>
                      <Layout.Section variant="oneThird">
                        <FormLayout>
                          <Select
                            label="Calendar layout"
                            options={LAYOUT_OPTIONS}
                          />

                          <Select
                            label="First day of calendar"
                            options={FIRST_DAY_OF_CALENDAR_OPTIONS}
                          />
                          <TextField label="Theme color" autoComplete="off" />
                          <TextField
                            label="Required message text color"
                            autoComplete="off"
                          />
                        </FormLayout>
                      </Layout.Section>
                    </Layout>
                  </Collapse>
                </Layout.Section>
                <Layout.Section>
                  <Collapse
                    title={
                      <Box paddingBlockEnd="400">
                        <InlineStack>
                          <Icon source={TextIcon} tone="critical" />
                          <Text as="span" tone="critical">
                            Widget Text
                          </Text>
                        </InlineStack>
                      </Box>
                    }
                  >
                    <Layout>
                      <Layout.Section variant="oneThird">
                        <FormLayout>
                          <Select label="Layout" options={LAYOUT_OPTIONS} />
                          <Select
                            label="Calendar language"
                            options={LANGUAGE_OPTIONS}
                          />
                          <Select
                            label="Date format"
                            options={LANGUAGE_OPTIONS}
                          />
                          <TextField label="Title color" autoComplete="off" />
                        </FormLayout>
                      </Layout.Section>
                      <Layout.Section variant="oneThird">
                        <FormLayout>
                          <Select
                            label="Calendar layout"
                            options={LAYOUT_OPTIONS}
                          />

                          <Select
                            label="First day of calendar"
                            options={FIRST_DAY_OF_CALENDAR_OPTIONS}
                          />
                          <TextField label="Theme color" autoComplete="off" />
                          <TextField
                            label="Required message text color"
                            autoComplete="off"
                          />
                        </FormLayout>
                      </Layout.Section>
                    </Layout>
                  </Collapse>
                </Layout.Section>
              </Layout>
            </Form>
          )}
        </Formik>
      </div>
      {/* </Page> */}
    </PolarisAppProvider>
  );
}
