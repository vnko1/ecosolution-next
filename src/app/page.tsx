import { About, Cases, Electricity, Hero } from "./_components";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <Electricity />
        <Cases />
      </div>
    </main>
  );
}
