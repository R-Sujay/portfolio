import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextBtn from "@/components/NextBtn";

export default async function Home() {
  return (
    <main className="relative z-10 h-screen w-full snap-y scrollbar-hide snap-mandatory overflow-x-hidden px-10 pb-28 font-poppins transition-colors dark:bg-[#13192d] sm:px-0 xl:px-0">
      <div className="mx-auto flex h-screen max-w-7xl  flex-shrink-0 snap-center snap-always flex-col justify-center">
        <Header />
        <Hero />
      </div>

      <NextBtn />
    </main>
  );
}
