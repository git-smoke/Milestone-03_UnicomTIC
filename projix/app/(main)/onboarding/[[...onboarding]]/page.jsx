import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const Onboarding = () => {
  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList hidePersonal/>
    </div>
  );
};

export default Onboarding;
