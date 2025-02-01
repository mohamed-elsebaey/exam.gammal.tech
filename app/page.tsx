import RandomPath from "@/components/RandomPath";
import HeroSection from "@/components/Sections/HeroSection";
import MainHeroSection from "@/components/Sections/MainHeroSection";
import Top5RankSection from "@/components/Sections/Top5RankSection";

export default async function Home() {
  return (
    <>
      <MainHeroSection />
      <HeroSection />
      <Top5RankSection />
      {/* <RandomPath/> */}
    </>
  );
}
