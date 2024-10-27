import { AppContainer } from "../components/AppContainer";
import { BottomMenuBar } from "../components/BottomMenuBar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bgColor">
      <AppContainer className="h-screen bg-black flex flex-col justify-between">
        {children}
        <BottomMenuBar />
      </AppContainer>
    </div>
  );
}
