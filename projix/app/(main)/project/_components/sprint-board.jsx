"use client";

import React, { useState } from "react";
import SprintManager from "./sprint-manager";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import statuses from "@/data/statuses";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const SprintBoard = ({ sprints, projectId, orgId }) => {
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((spr) => spr.status === "ACTIVE") || sprints[0]
  );

  const [isDrawerOpen, setIdDrawerOpen] = useState(false);
  const [selectStatus, setSelectedStatus] = useState(null);

  const handleAddIssue = (status) => {
    setSelectedStatus(status);
    setIdDrawerOpen(true);
  };

  const onDragEnd = () => {};

  return (
    <div>
      {/* Sprint Manager */}
      <SprintManager
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />

      {/* Kandban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 bg-slate-900 p-4 rounded-lg">
          {statuses.map((column) => (
            <Droppable key={column.key} droppableId={column.key}>
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-2"
                  >
                    <h3 className="font=semibold mb-2 text-center">
                      {column.name}
                    </h3>

                    {/* Issues */}

                    {provided.placeholder}
                    {column.key === "TODO" &&
                      currentSprint.status !== "COMPLETED" && (
                        <Button
                          variant="ghost"
                          className="w-full"
                          onClick={() => handleAddIssue(column.key)}
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Create Issue
                        </Button>
                      )}
                  </div>
                );
              }}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default SprintBoard;