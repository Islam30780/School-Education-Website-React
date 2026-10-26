import { Hero } from "../components/home/Hero";
import { Benefits } from "../components/home/Benefits";
import { Testimonials } from "../components/home/Testimonials";
import { FrequentlyAskedQuestions } from "../components/home/FrequentlyAskedQuestions";
import { NavigatePages } from "../components/home/NavigatePages";
export function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <NavigatePages />
    </>
  );
}