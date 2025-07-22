import HorizontalScrollGallery from "@/components/scrollTrigger/HorizontalScrollGallery";
import SplitRevealPage from "@/components/scrollTrigger/SplitReveal";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Scroll Down ⬇️
      </div>

      <SplitRevealPage />

      <div className="h-screen bg-black" />
    </main>
  );
}
