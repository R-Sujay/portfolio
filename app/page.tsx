import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextBtn from "@/components/NextBtn";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  console.log("Fetching data..."); // Add this line

  const data: Data = await client.fetch(`*[_type == "hero"] {
    _id,
    status,
    name,
    profile,
    location,
    desc
  }`);

  console.log(data);

  return (
    <main className="relative z-10 h-screen w-full snap-y snap-mandatory overflow-x-hidden scroll-smooth px-10 pb-28 font-poppins transition-colors scrollbar-hide dark:bg-[#13192d] sm:px-0 xl:px-0">
      <Header />
      <Hero data={data} />
      <Skills />

      <Projects />

      <NextBtn />
    </main>
  );
}
