import TextFadeStagger from "@/components/texts/TextFadeStagger";



export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
        Scroll down ⬇️
      </div>
      <TextFadeStagger />
      <div className="h-screen bg-black" />
    </main>
  );
}
