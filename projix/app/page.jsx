import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section*/}
      <section className="">
        <h1>
          Streamline Your Workflow
          <br />
          <span>
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
        <p>Empower your team with our intuitive project management solution.</p>
        <Link href="/onboarding">
          {" "}
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="/onboarding">
          {" "}
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>
    </div>
  );
}
