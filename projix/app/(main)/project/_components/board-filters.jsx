import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const BoardFilters = ({ issues, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState("");

  const assignees = issues
    .map((issue) => issue.assignee)
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );

  return (
    <div>
      <div className="flex flex-col pr-2 sm:flex-row gap-4 sm:gap-6 mt-6">
        <Input
          className="w-full sm:w-72"
          placeholder="Search Issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex-shrink-0">
          <div className="">
            {assignees.map((assignee, i) => {
              return (
                <div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={assignee.imageUrl} />
                    <AvatarFallback>{assignee.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardFilters;
