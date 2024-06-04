import {
  Box,
  FormLayout,
  Icon,
  InlineStack,
  Layout,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { TextIcon } from "@shopify/polaris-icons";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { Collapse } from "~/components";
import { IFormValues } from "~/models";
import {
  CALENDAR_LANGUAGE_OPTIONS,
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

const WidgetTextSection: React.FC<IProps> = ({
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
              <Icon source={TextIcon} />
            </div>
            <div className={styles.text}>
              <Text as="span" fontWeight="bold">
                Widget Text
              </Text>
            </div>
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
              options={CALENDAR_LANGUAGE_OPTIONS}
            />
            <Select label="Date format" options={CALENDAR_LANGUAGE_OPTIONS} />
            <TextField label="Title color" autoComplete="off" />
          </FormLayout>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <FormLayout>
            <Select label="Calendar layout" options={LAYOUT_OPTIONS} />

            <Select
              label="First day of calendar"
              options={FIRST_DAY_OF_CALENDAR_OPTIONS}
            />
            <TextField label="Theme color" autoComplete="off" />
            <TextField label="Required message text color" autoComplete="off" />
          </FormLayout>
        </Layout.Section>
      </Layout>
    </Collapse>
  );
};

export default WidgetTextSection;
