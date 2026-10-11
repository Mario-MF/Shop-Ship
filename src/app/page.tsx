import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { InternationalStores } from "@/components/InternationalStores";
import { Steps } from "@/components/Steps";
import { Categories } from "@/components/Categories";
import { Brands } from "@/components/Brands";
import { DeliveryJourney } from "@/components/DeliveryJourney";
import { AllOverTheWorld } from "@/components/AllOverTheWorld";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <InternationalStores />
        <Steps />
        <Categories />
        <Brands />
        <DeliveryJourney />
        <AllOverTheWorld />
      </main>
      <Footer />
    </>
  );
}
