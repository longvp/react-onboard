import {
  Box,
  FormLayout,
  Icon,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import { TextIcon } from "@shopify/polaris-icons";
import classNames from "classnames";
import { Field, FormikErrors, FormikTouched, getIn } from "formik";
import React, { useState } from "react";
import { Collapse } from "~/components";
import { IFormValues } from "~/models";
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
  const [activeTab, setActiveTab] = useState("delivery");

  const renderContentDeliverTab = () => {
    return (
      <FormLayout>
        <Field name="delivery.title">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Title"
              placeholder="Select a delivery date"
              value={values.delivery?.title}
              onChange={(value) => setFieldValue("delivery.title", value)}
              error={
                getIn(touched, "delivery.title") &&
                getIn(errors, "delivery.title")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="delivery.deliveryDateLabel">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Delivery date label"
              placeholder="Delivery Date"
              value={values.delivery?.deliveryDateLabel}
              onChange={(value) =>
                setFieldValue("delivery.deliveryDateLabel", value)
              }
              error={
                getIn(touched, "delivery.deliveryDateLabel") &&
                getIn(errors, "delivery.deliveryDateLabel")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="delivery.deliveryDateTitle">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Delivery date title"
              placeholder="Delivery Date"
              value={values.delivery?.deliveryDateTitle}
              onChange={(value) =>
                setFieldValue("delivery.deliveryDateTitle", value)
              }
              error={
                getIn(touched, "delivery.deliveryDateTitle") &&
                getIn(errors, "delivery.deliveryDateTitle")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="delivery.deliveryTimeTitle">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Delivery time title"
              placeholder="Delivery Time"
              value={values.delivery?.deliveryTimeTitle}
              onChange={(value) =>
                setFieldValue("delivery.deliveryTimeTitle", value)
              }
              error={
                getIn(touched, "delivery.deliveryTimeTitle") &&
                getIn(errors, "delivery.deliveryTimeTitle")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="delivery.messageText">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Required message text"
              placeholder="Henry Nguyen"
              value={values.delivery?.messageText}
              onChange={(value) => setFieldValue("delivery.messageText", value)}
              error={
                getIn(touched, "delivery.messageText") &&
                getIn(errors, "delivery.messageText")
              }
              autoComplete="off"
            />
          )}
        </Field>
      </FormLayout>
    );
  };

  const renderContentStoreTab = () => {
    return (
      <FormLayout>
        <Field name="store.storePickup">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Store pickup label"
              placeholder="Store Pickup"
              value={values.store?.storePickup}
              onChange={(value) => setFieldValue("store.storePickup", value)}
              error={
                getIn(touched, "store.storePickup") &&
                getIn(errors, "store.storePickup")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="store.storage">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Message text to require buyers to choose a pickup location"
              placeholder="Choose the storage to pickup your product(s)"
              value={values.store?.storage}
              onChange={(value) => setFieldValue("store.storage", value)}
              error={
                getIn(touched, "store.storage") &&
                getIn(errors, "store.storage")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="store.pickupDate">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Store pickup date title"
              placeholder="Store pickup Date"
              value={values.store?.pickupDate}
              onChange={(value) => setFieldValue("store.pickupDate", value)}
              error={
                getIn(touched, "store.pickupDate") &&
                getIn(errors, "store.pickupDate")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="store.pickupTime">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Store pickup time title"
              placeholder="Store pickup Time"
              value={values.store?.pickupTime}
              onChange={(value) => setFieldValue("store.pickupTime", value)}
              error={
                getIn(touched, "store.pickupTime") &&
                getIn(errors, "store.pickupTime")
              }
              autoComplete="off"
            />
          )}
        </Field>
        <Field name="store.messageText">
          {({ field }: any) => (
            <TextField
              {...field}
              label="Required message text"
              placeholder="Please select pickup date before checkout"
              value={values.store?.messageText}
              onChange={(value) => setFieldValue("store.messageText", value)}
              error={
                getIn(touched, "store.messageText") &&
                getIn(errors, "store.messageText")
              }
              autoComplete="off"
            />
          )}
        </Field>
      </FormLayout>
    );
  };

  return (
    <Collapse
      title={
        <Box>
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
      <div className={styles.tabs}>
        <div
          className={classNames(styles.tabItem, {
            [styles.tabActive]: activeTab === "delivery",
          })}
          onClick={() => setActiveTab("delivery")}
        >
          Delivery Date
        </div>
        <div
          className={classNames(styles.tabItem, {
            [styles.tabActive]: activeTab === "store",
          })}
          onClick={() => setActiveTab("store")}
        >
          Store Pickup
        </div>
      </div>
      <div className={styles.content}>
        {activeTab === "delivery" && renderContentDeliverTab()}
        {activeTab === "store" && renderContentStoreTab()}
      </div>
    </Collapse>
  );
};

export default WidgetTextSection;
