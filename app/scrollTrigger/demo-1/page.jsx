import GsapScrollSection from "@/components/scrollTrigger/GsapScrollSection";


export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
        Scroll down ⬇️
      </div>
      <GsapScrollSection />
      <div className="h-screen bg-black" />
    </main>
  );
}
