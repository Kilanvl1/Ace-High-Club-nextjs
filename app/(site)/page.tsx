"use client";
import ContainerNew from "../components/ContainerNew";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { Button } from "../components/buttons/Button";
import { FunctionalityContainer } from "../components/FunctionalityContainer";
import { Login } from "../components/Login";
import { useRef } from "react";

export default function Home() {
  const loginRef = useRef<HTMLDivElement>(null);
  const focusLogin = () => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          <Button size="large" onClick={focusLogin}>
            Get Started
          </Button>
        </Hero>
      </ContainerNew>
      <ContainerNew
        as="section"
        className="bg-background-gradient-to-right 2xl:bg-background-gradient-big-screen pt-32"
      >
        <FunctionalityContainer />
        <Login ref={loginRef} />
      </ContainerNew>
    </>
  );
}
