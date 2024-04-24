import { About, Electricity, Hero } from "./_components";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <Electricity />
      </div>
    </main>
  );
}
