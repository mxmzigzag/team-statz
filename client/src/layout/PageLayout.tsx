import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
