import Image from "next/image";
import ContainerNew from "../components/ContainerNew";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { Button } from "../components/buttons/Button";
import { FunctionalityContainer } from "../components/FunctionalityContainer";

export default function Home() {
  return (
    <>
      <ContainerNew
        className="h-[calc(100vh-3rem)] min-h-96 bg-dice bg-center bg-cover"
        as="section"
      >
        <Hero className="relative top-1/4 flex flex-col items-center text-center lg:items-start lg:text-start lg:pl-10">
          <HeroTitle>
            Welcome to the <br className="hidden md:block" /> Ace High Club
          </HeroTitle>
          <HeroSubtitle>
            The easiest way to organize your poker cash games!
          </HeroSubtitle>
          <Button size="large">Get Started</Button>
        </Hero>
      </ContainerNew>

      <FunctionalityContainer />
    </>
  );
}
