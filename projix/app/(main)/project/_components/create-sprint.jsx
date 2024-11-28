"use client";

import { createSprint } from "@/actions/sprints";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SprintCreationForm = ({
  projectTitle,
  projectKey,
  projectId,
  sprintKey,
}) => {
  const [showForm, setShowForm] = useState(false);

  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 14),
  });

  useForm({
    resolver: zodResolver(createSprint),
    defaultValues: {
      name: `${projectKey}-${sprintKey}`,
      startDate: dateRange.from,
      endDate: dateRange.to,
    },
  });

  return (
    <>
      <div>
        <h1>{projectTitle}</h1>
        <Button
          className="mt-2"
          onClick={() => setShowForm(!showForm)}
          variant={showForm ? "destructive" : "default"}
        >
          {showForm ? "Cancel" : "Create New Sprint"}
        </Button>
      </div>

      {showForm && <Card>
            <CardContent>
                <form action=""></form>
            </CardContent>
        </Card>}
    </>
  );
};

export default SprintCreationForm;
