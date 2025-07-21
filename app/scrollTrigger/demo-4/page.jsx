import BouncingBallsScroll2 from "@/components/scrollTrigger/BouncingBallsScroll2";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black text-white flex items-center justify-center text-3xl">
        Scroll to Animate ⬇️
      </div>

      <BouncingBallsScroll2 />

      <div className="h-screen bg-black" />
    </main>
  );
}
