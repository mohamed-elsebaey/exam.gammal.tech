import RandomPath from "@/components/RandomPath";
import HeroSection from "@/components/Sections/HeroSection";
import Top5RankSection from "@/components/Sections/Top5RankSection";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <Top5RankSection/>
      {/* <RandomPath/> */}
    </>
  );
}
