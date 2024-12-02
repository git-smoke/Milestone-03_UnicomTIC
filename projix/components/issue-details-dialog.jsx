import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useOrganization, useUser } from "@clerk/nextjs";
import useFetch from "@/hooks/use-fetch";
import { deleteIssue } from "@/actions/issues";

const IssueDetailsDialog = ({
  isOpen,
  onClose,
  issue,
  onDelete = () => {},
  onUpdate = () => {},
  borderCol = "",
}) => {
  const [status, setStatus] = useState(issue.status);
  const [priority, setPriority] = useState(issue.priority);

  const { user } = useUser();
  const { membership } = useOrganization();
  const pathname = usePathname();
  const router = useRouter();

  const {
    loading: deleteLoading,
    error: deleteError,
    fn: deleteIssuefn,
    data: deleted,
  } = useFetch(deleteIssue);

  const {} = useFetch();

  const handleGoToProject = () => {
    router.push(`/project/${issue.projectId}?sprint=${issue.sprintId}`);
  };

  const isProjectpage = pathname.startsWith("/project/");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-between items-centers">
            <DialogTitle className="text-3xl">{issue.title}</DialogTitle>
          </div>
          {!isProjectpage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoToProject}
              title="Go to Project"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default IssueDetailsDialog;
