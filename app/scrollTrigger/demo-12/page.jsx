import BallsSpin from "@/components/scrollTrigger/BallsSpin";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        Scroll Down ⬇️
      </div>

      <BallsSpin />

      <div className="h-screen bg-black" />
    </main>
  );
}
