import AdvancedTextReveal2 from "@/components/texts/TextReveal3";



export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
        Scroll down ⬇️
      </div>
      <AdvancedTextReveal2 />
      <div className="h-screen bg-black" />
    </main>
  );
}
