import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const IssueDetailsDialog = ({
  isOpen,
  onClose,
  issue,
  onDelete = () => {},
  onUpdate = () => {},
  borderCol = "",
}) => {
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
