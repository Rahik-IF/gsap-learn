import BouncingBallsScroll from "@/components/scrollTrigger/BouncingBallsScroll";


export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black text-white flex items-center justify-center text-3xl">
        Scroll to Animate ⬇️
      </div>

      <BouncingBallsScroll />

      <div className="h-screen bg-black" />
    </main>
  );
}
