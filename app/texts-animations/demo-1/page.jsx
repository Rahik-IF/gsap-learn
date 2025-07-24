import TextReveal from "@/components/texts/TextReveal";



export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
        Scroll down ⬇️
      </div>
      <TextReveal />
      <div className="h-screen bg-black" />
    </main>
  );
}
