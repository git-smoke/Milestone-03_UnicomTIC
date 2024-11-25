import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Intutive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with out easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics",
    icon: Calendar,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section*/}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow
          <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with{" "}
            <Image
              src={"/logo2.png"}
              alt="projix Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <Link href="/onboarding">
          {" "}
          <Button size="lg" className="mr-2">
            Get Started <ChevronRight size={18} className="" />
          </Button>
        </Link>
        <Link href="/onboarding">
          {" "}
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>

      <section>
        <div>
          <h3>Key Features</h3>
          <div></div>
        </div>
      </section>
    </div>
  );
}
