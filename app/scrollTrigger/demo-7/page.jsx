import PinnedShowcase from "@/components/scrollTrigger/PinnedShowcase";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Scroll Down ⬇️
      </div>

      <PinnedShowcase />

      <div className="h-screen bg-black" />
    </main>
  );
}
