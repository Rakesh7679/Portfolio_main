import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Journey from "@/components/sections/Journey/LightJourney";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Work from "@/components/sections/Work/Work";
import Experience from "@/components/sections/Experience/Experience";
import Certifications from "@/components/sections/Certifications/Certifications";
import Connect from "@/components/sections/Connect/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Scene order={1} runway={6} id="intro" keepOnMobile>
          <TunnelIntro />
        </Scene>

        <Scene order={2} id="hero">
          <Hero />
        </Scene>

        <Scene order={3} id="about">
          <About />
        </Scene>

        <Scene order={4} runway={6} id="journey" keepOnMobile>
          <Journey />
        </Scene>

        <Scene order={5} id="stack">
          <DesignStack />
        </Scene>

        <Scene order={6} runway={6.0} id="work">
          <Work />
        </Scene>

        <Scene order={7} runway={4.4} id="experience">
          <Experience />
        </Scene>

        <Scene order={8} runway={3.5} id="credentials">
          <Certifications />
        </Scene>

        {/* the closing Connect frame rises over Certifications, then scrolls naturally */}
        <div className="finalFrame">
          <Connect />
        </div>
      </main>
    </>
  );
}

