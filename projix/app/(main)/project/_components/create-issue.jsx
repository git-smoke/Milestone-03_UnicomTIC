"use client";

import { Drawer } from "@/components/ui/drawer";

const IssueCreationDrawer = ({
  isOpen,
  onClose,
  sprintId,
  status,
  projectId,
  onIssueCreated,
  orgId,
}) => {
  return <Drawer open={isOpen} onClose={onClose}></Drawer>;
};

export default IssueCreationDrawer;
