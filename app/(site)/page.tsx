import ContainerNew from "../components/ContainerNew";

const title = "Welcome to the Ace High Club";
const subTitle = "The easiest way to organize your poker cash games!";

export default function Home() {
  return (
    <section className={`bg-dice bg-center bg-cover `}>
      <ContainerNew className="h-screen">
        <WelcomeMessage />
      </ContainerNew>
    </section>
  );
}

const WelcomeMessage = () => {
  return (
    <div className="relative top-1/4 flex flex-col gap-y-4 pl-10">
      <h1 className="font-medium text-5xl leading-tight">
        Welcome to <br /> the Ace High Club
      </h1>
      <p className="text-xl">{subTitle}</p>
    </div>
  );
};
