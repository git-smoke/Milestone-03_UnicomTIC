"use client";

import { useOrganization, useUser } from "@clerk/nextjs";

const UserLoading = () => {
  const { isLoaded } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
};
