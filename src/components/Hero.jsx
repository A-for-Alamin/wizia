import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Button from "./common/Button";

function Hero() {
  return (
    <section className="bg-[url(./public/img/Hero.png)] bg-center bg-cover bg-no-repeat">
      <div className="container py-16 md:py-40 lg:py-52 text-center md:text-start">
        <p className="text-xl sm:text-2xl text-primary font-montserrat">
          AI SDRs (aiDRs)
        </p>
        <h1 className="text-5xl font-montserrat sm:text-6xl md:text-[64px] text-white font-semibold italic leading-[55px] md:leading-[78px]">
          <span className="font-bold not-italic">More</span> leads,
          <br /> <span className="font-bold not-italic">less</span> people.
        </h1>
        <p className="sm:text-[20px] text-white/50 md:max-w-[450px] mb-6 mt-2.5 px-2 md:p-0 font-light font-workSans">
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
