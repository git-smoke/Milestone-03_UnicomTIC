import Image from "next/image";

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
      </section>
    </div>
  );
}
