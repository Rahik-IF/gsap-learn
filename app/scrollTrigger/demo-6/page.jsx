import GsapScrollUseGSAP from "@/components/scrollTrigger/GsapScrollUseGSAP";
import StaggerScrollDemo from "@/components/scrollTrigger/StaggerExample-1";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Scroll Down ⬇️
      </div>

      <StaggerScrollDemo />

      <div className="h-screen bg-black" />
    </main>
  );
}
