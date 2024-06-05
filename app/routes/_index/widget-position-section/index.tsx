import {
  Box,
  ChoiceList,
  FormLayout,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { IconsIcon } from "@shopify/polaris-icons";
import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";
import { Collapse } from "~/components";
import { IFormValues } from "~/models";
import { WIDGET_POSITION_OPTIONS } from "~/utilities/constants";
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
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const WidgetPositionSection: React.FC<IProps> = ({
  values,
  setFieldValue,
  errors,
  touched,
  handleChange,
}) => {
  return (
    <Collapse
      title={
        <Box paddingBlockEnd="200">
          <InlineStack gap="200">
            <div className={styles.icon}>
              <Icon source={IconsIcon} />
            </div>
            <div className={styles.text}>
              <Text as="span" fontWeight="bold">
                Widget Position
              </Text>
            </div>
          </InlineStack>
        </Box>
      }
    >
      <FormLayout>
        <Field name="widgetPosition">
          {({ field }: any) => (
            <ChoiceList
              {...field}
              title=""
              allowMultiple
              choices={WIDGET_POSITION_OPTIONS}
              selected={values.widgetPosition}
              onChange={(value) => setFieldValue("widgetPosition", value)}
              error={touched.widgetPosition && errors.widgetPosition}
            />
          )}
        </Field>
      </FormLayout>
    </Collapse>
  );
};

export default WidgetPositionSection;
