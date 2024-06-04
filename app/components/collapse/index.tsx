import {
  Box,
  Button,
  Card,
  Collapsible,
  Icon,
  InlineStack,
} from "@shopify/polaris";
import { ChevronDownIcon } from "@shopify/polaris-icons";
import React, { useId, useState } from "react";
import styles from "./styles.module.css";

interface CollapseProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ children, title }) => {
  const id = useId();
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <Card>
      <InlineStack align="space-between">
        <Box>{title}</Box>
        <div className={styles.buttonToggle}>
          <Button
            onClick={handleToggle}
            ariaExpanded={open}
            ariaControls="basic-collapsible"
            icon={<Icon source={ChevronDownIcon} tone="critical" />}
            variant="plain"
          />
        </div>
      </InlineStack>
      <Collapsible
        open={open}
        id={id}
        transition={{
          duration: "500ms",
          timingFunction: "ease-in-out",
        }}
        expandOnPrint
      >
        {children}
      </Collapsible>
    </Card>
  );
};

export default Collapse;
