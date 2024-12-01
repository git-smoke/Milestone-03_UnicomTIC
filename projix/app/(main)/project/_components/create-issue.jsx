"use client";

import { createIssue } from "@/actions/issues";
import { getOrganizationUsers } from "@/actions/organizations";
import { issueSchema } from "@/app/lib/validators";
import useFetch from "@/hooks/use-fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(issueSchema),
  });

  const {
    loading: createIssueLoading,
    fn: createIssuefn,
    error,
    data: newIssue,
  } = useFetch(createIssue);

  const {
    loading: userLoading,
    fn: fetchUsers,
    data: users,
  } = useFetch(getOrganizationUsers);

  useEffect(() => {
    if (isOpen && orgId) {
      fetchUsers(orgId);
    }
  }, [isOpen && orgId]);

  const onSubmit = async (data) => {};

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Issue</DrawerTitle>
        </DrawerHeader>
        {userLoading && <BarLoader width={"100%"} color="#36d7b7" />}
      </DrawerContent>
    </Drawer>
  );
};

export default IssueCreationDrawer;
