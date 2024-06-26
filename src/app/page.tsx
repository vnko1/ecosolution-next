import {
  About,
  Cases,
  ContactUs,
  Electricity,
  Hero,
  Questions,
} from "./_components";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <Electricity />
        <Cases />
        <Questions />
        <ContactUs />
      </div>
    </main>
  );
}
