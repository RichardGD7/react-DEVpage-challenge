import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MainSection from "../components/MainSection";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 z-50 w-full">
        <NavBar />
      </header>

      <div className="grid grid-cols-11 gap-5 m-auto p-2 max-w-[1280px] relative top-16">
        <section className="col-span-2">
          <AsideLeft />
        </section>
        <section className="col-span-6">
          <MainSection />
        </section>
        <section className="col-span-3">
          <AsideRight />
        </section>
      </div>

      <Outlet />
    </div>
  );
}
