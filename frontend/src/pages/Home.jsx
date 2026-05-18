import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import HomeAfter from "./HomeAfter";
import HomeBefore from "./HomeBefore";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeBefore />
      <ContactForm />
      <HomeAfter />
    </>
  );
}
