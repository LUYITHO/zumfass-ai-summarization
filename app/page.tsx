import BgGradient from "@/components/common/BgGradient";
import HeroSection from "@/components/home/HeroSection";


function page() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
    </div>
  );
}

export default page;
