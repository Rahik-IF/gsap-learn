import AdvancedTextReveal from "@/components/texts/TextReveal2";



export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
        Scroll down ⬇️
      </div>
      <AdvancedTextReveal />
      <div className="h-screen bg-black" />
    </main>
  );
}
