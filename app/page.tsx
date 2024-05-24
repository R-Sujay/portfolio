import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextBtn from "@/components/NextBtn";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import getData from "@/lib/getData";

export default async function Home() {
  const { hero, skills } = await getData();

  return (
    <main className="relative z-10 h-screen w-full snap-y snap-mandatory overflow-x-hidden scroll-smooth px-10 pb-28 font-poppins transition-colors scrollbar-hide dark:bg-[#13192d] sm:px-0 xl:px-0">
      <Header />
      <Hero hero={hero} />
      <Skills skills={skills} />

      <Experience />

      <Projects />

      <NextBtn />
    </main>
  );
}
