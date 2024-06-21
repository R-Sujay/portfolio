import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextBtn from "@/components/NextBtn";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import getData from "@/lib/getData";
import { Metadata } from "next";

const { hero, skills, services, projects, profile, details } = await getData();

export const metadata: Metadata = {
  description: hero.desc,
};

export default async function Home() {
  const profileRes = await fetch(profile.desc, { cache: "force-cache" });
  const profileData = await profileRes.json();
  const profileDesc = JSON.stringify(profileData, null, "\t");

  return (
    <main className="relative z-10 h-screen w-full overflow-x-hidden scroll-smooth font-poppins transition-colors scrollbar-hide dark:bg-dark custombp:lg:snap-y custombp:lg:snap-mandatory custombp:lg:pb-28">
      <Header />

      <Hero hero={hero} />
      <Profile desc={profileDesc} services={profile.services} />
      <Skills skills={skills} desc={hero.skills} />
      <Services services={services} />
      <Projects projects={projects} />
      <Footer details={details} />

      <NextBtn />
    </main>
  );
}
