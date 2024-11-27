""

import { getProjects } from "@/actions/projects";
import { Link } from "next/link";

export default async function ProjectList({ orgId }) {
  const projects = await getProjects(orgId);

  if (projects.length !== 0) {
    return (
      <p>
        No Projects Found.{""}
        <Link
          href="/project/create"
          className="underline underline-offset-2 text-blue-200"
        >
          Create New
        </Link>
      </p>
    );
  }
}
