import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { usePathname } from "next/navigation";

const IssueDetailsDialog = ({
  isOpen,
  onClose,
  issue,
  onDelete = () => {},
  onUpdate = () => {},
  borderCol = "",
}) => {
  const pathname = usePathname();

  const isProjectpage = pathname.startsWith("/project/");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-between items-centers">
            <DialogTitle className="text-3xl">{issue.title}</DialogTitle>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default IssueDetailsDialog;
