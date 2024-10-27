import { PokerCashGameCalculatorComponent } from "@/components/poker-cash-game-calculator";

export default function SplitserPage() {
  return (
    <section>
      <h1 className="text-xl font-bold text-center">Settle cash games</h1>
      <p className="text-center">
        Here you can settle cash games with your friends.
      </p>
      <PokerCashGameCalculatorComponent />
    </section>
  );
}
