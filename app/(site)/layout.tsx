import { Footer } from "../layouts/footer/Footer";
import Header from "../layouts/header/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuPages = [
    {
      id: 1,
      title: "Home",
      meta: {
        html_url: "/",
        deatil_url: "/",
      },
    },
    {
      id: 2,
      title: "About me",
      meta: {
        html_url: "/about-me",
        deatil_url: "/about-me",
      },
    },
    {
      id: 3,
      title: "Profile",
      meta: {
        html_url: "/profile",
        detail_url: "/profile",
      },
    },
  ];
  return (
    <>
      <Header menuPages={menuPages} />
      {children}
      <Footer />
    </>
  );
}
