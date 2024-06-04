import {
  Box,
  ChoiceList,
  FormLayout,
  Icon,
  InlineStack,
  Layout,
  Text,
} from "@shopify/polaris";
import { IconsIcon } from "@shopify/polaris-icons";
import { Field, FormikErrors } from "formik";
import React from "react";
import { Collapse } from "~/components";
import { WIDGET_POSITION_OPTIONS } from "~/constants";
import { IFormValues } from "~/models";

interface WigetPositionSectionProps {
  values: IFormValues;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void | FormikErrors<IFormValues>>;
  errors: FormikErrors<IFormValues>;
}

const WigetPositionSection: React.FC<WigetPositionSectionProps> = ({
  values,
  setFieldValue,
  errors,
}) => {
  return (
    <Layout.Section>
      <Collapse
        title={
          <Box paddingBlockEnd="200">
            <InlineStack>
              <Icon source={IconsIcon} tone="critical" />
              <Text as="span" tone="critical">
                Widget Position
              </Text>
            </InlineStack>
          </Box>
        }
      >
        <FormLayout>
          <Field name="wigetPosition">
            {({ field }: any) => (
              <ChoiceList
                {...field}
                title=""
                allowMultiple
                choices={WIDGET_POSITION_OPTIONS}
                selected={values?.wigetPosition ?? []}
                onChange={(selected) =>
                  setFieldValue("wigetPosition", selected)
                }
                error={errors?.wigetPosition}
              />
            )}
          </Field>
        </FormLayout>
      </Collapse>
    </Layout.Section>
  );
};

export default WigetPositionSection;
