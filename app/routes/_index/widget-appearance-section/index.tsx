import {
  Box,
  Checkbox,
  FormLayout,
  Icon,
  InlineStack,
  Layout,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { PaintBrushFlatIcon } from "@shopify/polaris-icons";
import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";
import { Collapse } from "~/components";
import { IFormValues } from "~/models";
import {
  CALENDAR_LANGUAGE_OPTIONS,
  DATE_FORMAT_OPTIONS,
  FIRST_DAY_OF_CALENDAR_OPTIONS,
  LAYOUT_OPTIONS,
} from "~/utilities/constants";
import styles from "./styles.module.css";

interface IProps {
  values: IFormValues;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void | FormikErrors<IFormValues>>;
  errors: FormikErrors<IFormValues>;
  touched: FormikTouched<IFormValues>;
}

const WidgetAppearanceSection: React.FC<IProps> = ({
  values,
  setFieldValue,
  errors,
  touched,
}) => {
  return (
    <Collapse
      title={
        <Box paddingBlockEnd="800">
          <InlineStack gap="200">
            <div className={styles.icon}>
              <Icon source={PaintBrushFlatIcon} tone="critical" />
            </div>
            <div className={styles.text}>
              <Text as="span" fontWeight="bold">
                Widget Appearance
              </Text>
            </div>
          </InlineStack>
        </Box>
      }
    >
      <Layout>
        <Layout.Section variant="oneThird">
          <FormLayout>
            <div style={{ marginBottom: "30px" }}>
              <Field name="layout">
                {({ field }: any) => (
                  <Select
                    {...field}
                    label="Layout"
                    value={values.layout}
                    options={LAYOUT_OPTIONS}
                    onChange={(value) => setFieldValue("layout", value)}
                    error={touched.layout && errors.layout}
                  />
                )}
              </Field>
            </div>
            <Field name="calendarLanguage">
              {({ field }: any) => (
                <Select
                  {...field}
                  label="Calendar language"
                  value={values.calendarLanguage}
                  options={CALENDAR_LANGUAGE_OPTIONS}
                  onChange={(value) => setFieldValue("calendarLanguage", value)}
                  error={touched.calendarLanguage && errors.calendarLanguage}
                />
              )}
            </Field>
            <Field name="date">
              {({ field }: any) => (
                <Select
                  {...field}
                  label="Date format"
                  value={values.date}
                  options={DATE_FORMAT_OPTIONS}
                  onChange={(value) => setFieldValue("date", value)}
                  error={touched.date && errors.date}
                />
              )}
            </Field>

            <Field name="titleColor">
              {({ field }: any) => (
                <div className={styles.inputFieldColor}>
                  <TextField
                    {...field}
                    label="Title color"
                    value={values.titleColor}
                    onChange={(value) => setFieldValue("titleColor", value)}
                    error={touched.titleColor && errors.titleColor}
                    autoComplete="off"
                  />
                  <input
                    type="color"
                    className={styles.inputColor}
                    value={values.titleColor}
                    style={{ backgroundColor: `${values.titleColor}` }}
                    onChange={(e) =>
                      setFieldValue("titleColor", e.target.value)
                    }
                  />
                </div>
              )}
            </Field>
          </FormLayout>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <FormLayout>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Field name="calendarLayout">
                {({ field }: any) => (
                  <Select
                    {...field}
                    label="Calendar layout"
                    value={values.calendarLayout}
                    options={LAYOUT_OPTIONS}
                    onChange={(value) => setFieldValue("calendarLayout", value)}
                    error={touched.calendarLayout && errors.calendarLayout}
                  />
                )}
              </Field>
              <Field name="alwaysOpenCalendar">
                {({ field }: any) => (
                  <Checkbox
                    {...field}
                    label="Always open the calendar"
                    checked={values.alwaysOpenCalendar}
                    onChange={(value) =>
                      setFieldValue("alwaysOpenCalendar", value)
                    }
                  />
                )}
              </Field>
            </div>
            <Field name="firstDayOfCalendar">
              {({ field }: any) => (
                <Select
                  {...field}
                  label="First day of calendar"
                  value={values.firstDayOfCalendar}
                  options={FIRST_DAY_OF_CALENDAR_OPTIONS}
                  onChange={(value) =>
                    setFieldValue("firstDayOfCalendar", value)
                  }
                  error={
                    touched.firstDayOfCalendar && errors.firstDayOfCalendar
                  }
                />
              )}
            </Field>
            <Field name="themeColor">
              {({ field }: any) => (
                <div className={styles.inputFieldColor}>
                  <TextField
                    {...field}
                    label="Theme color"
                    value={values.themeColor}
                    onChange={(value) => setFieldValue("themeColor", value)}
                    error={touched.themeColor && errors.themeColor}
                    autoComplete="off"
                  />
                  <input
                    type="color"
                    className={styles.inputColor}
                    value={values.themeColor}
                    style={{ backgroundColor: `${values.themeColor}` }}
                    onChange={(e) =>
                      setFieldValue("themeColor", e.target.value)
                    }
                  />
                </div>
              )}
            </Field>
            <Field name="messageTextColor">
              {({ field }: any) => (
                <div className={styles.inputFieldColor}>
                  <TextField
                    {...field}
                    label="Required message text color"
                    value={values.messageTextColor}
                    onChange={(value) =>
                      setFieldValue("messageTextColor", value)
                    }
                    error={touched.messageTextColor && errors.messageTextColor}
                    autoComplete="off"
                  />
                  <input
                    type="color"
                    className={styles.inputColor}
                    value={values.messageTextColor}
                    style={{ backgroundColor: `${values.messageTextColor}` }}
                    onChange={(e) =>
                      setFieldValue("messageTextColor", e.target.value)
                    }
                  />
                </div>
              )}
            </Field>
          </FormLayout>
        </Layout.Section>
      </Layout>
    </Collapse>
  );
};

export default WidgetAppearanceSection;
