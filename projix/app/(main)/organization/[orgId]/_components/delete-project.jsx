"use client";

import { deleteProject } from "@/actions/projects";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { useOrganization } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const DeleteProject = ({ projectId }) => {
  const { membership } = useOrganization();
  const router = useRouter();

  const {
    data: deleted,
    loading: isDeleting,
    error,
    fn: deleteProjectfn,
  } = useFetch(deleteProject);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProjectfn(projectId);
    }
  };

  useEffect(() => {
    if (deleted?.success) {
      toast.success("Project Deleted Sussesfully");
      router.refresh();
    }
  }, [deleted]);

  console.log("Membership:", membership);

  const isAdmin = membership?.role === "org:admin";
  if (!isAdmin) {
    return null;
  }

  return (
    <Button variant="ghost" onClick={handleDelete} disabled={isDeleting}>
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteProject;
