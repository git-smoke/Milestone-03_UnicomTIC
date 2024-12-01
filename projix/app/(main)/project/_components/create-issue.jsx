"use client";

import { issueSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} = require("@/components/ui/drawer");

const IssueCreationDrawer = ({
  isOpen,
  onClose,
  sprintId,
  status,
  projectId,
  onIssueCreated,
  orgId,
}) => {

    const {
        control,
        register,
        handleSubmit,
        formState: {errors},} = useForm({
            resolver: zodResolver(issueSchema)
        })
    }
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Issue</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default IssueCreationDrawer;
