import PaperPlaneSection from "@/components/scrollTrigger/PaperPlaneSection";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Scroll Down ⬇️
      </div>

      <PaperPlaneSection />

      <div className="h-screen bg-black" />
    </main>
  );
}
