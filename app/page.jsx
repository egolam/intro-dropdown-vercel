import Hero from "@/public/image-hero-mobile.png";
import audioPhile from "@/public/client-audiophile.svg";
import dataBiz from "@/public/client-databiz.svg";
import Maker from "@/public/client-maker.svg";
import Meet from "@/public/client-meet.svg";
import heroDesktop from "@/public/image-hero-desktop.png";
import Image from "next/image";

export default function Home() {
  return (
    <section className="md:max-w-7xl flex md:flex-row flex-col md:gap-[8rem] md:mt-16">
      <div className="md:order-2 max-w-[480px]">
        <div className="hidden md:block">
          <Image src={heroDesktop} alt="a man holding laptop" />
        </div>
        <div className="md:hidden">
          <Image src={Hero} alt="a man holding laptop" />
        </div>
      </div>
      <div className="md:self-end max-w-[540px] flex flex-col md:items-start items-center px-4 text-center md:text-left md:gap-12 gap-6 mt-11 md:mt-0">
        <h1 className="font-bold text-4xl md:text-[5rem]  text-[#151515] flex md:flex-col tracking-tight leading-none">
          Make remote work
        </h1>
        <p className="text-[#686868] font-medium md:text-lg">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="font-bold bg-[#151515] border-2 border-[#151515] hover:bg-[#fafafa] hover:text-[#151515] text-[#FAFAFA] px-6 py-3 rounded-2xl">
          Learn more
        </button>
        <div className="flex gap-6 mt-10">
          <div>
            <Image alt="Audiophile logo" src={audioPhile} />
          </div>
          <div>
            <Image alt="Databiz logo" src={dataBiz} />
          </div>
          <div>
            <Image alt="Maker logo" src={Maker} />
          </div>
          <div>
            <Image alt="Meet logo" src={Meet} />
          </div>
        </div>
      </div>
    </section>
  );
}
