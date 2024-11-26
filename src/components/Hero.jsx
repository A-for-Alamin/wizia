import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Button from "./common/Button";

function Hero() {
  return (
    <section className="bg-[url(img/Hero.png)] bg-center bg-cover bg-no-repeat">
      <div className="container py-16 md:py-52 text-center md:text-start">
        <p className="text-2xl text-primary">AI SDRs (aiDRs)</p>
        <h1 className="text-5xl sm:text-6xl md:text-[64px] text-white font-semibold leading-[55px] md:leading-[78px]">
          <span className="font-bold">More</span> leads,
          <br /> <span className="font-bold">less</span> people.
        </h1>
        <p className="sm:text-[20px] text-white/50 md:max-w-[450px] mb-6 mt-2.5 px-2 md:p-0">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>
        <Button className="flex items-center justify-center gap-1 w-full md:w-auto">
          Sign Up for the Beta
          <LiaExternalLinkSquareAltSolid className="text-lg" />
        </Button>
      </div>
    </section>
  );
}

export default Hero;