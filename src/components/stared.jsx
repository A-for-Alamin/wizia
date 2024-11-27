import Button from "./common/Button";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

function Stared() {
  return (
    <section className="container px-2 py-8 sm:py-14 md:py-20 space-y-[15px] md:space-y-[23px] text-center">
      <p className="text-[20px] text-primary">GET STARTED</p>
      <h1 className="text-3xl sm:text-[36px] italic text-white font-medium leading-[40px]">
        Embrace <span className="font-bold not-italic">the new era of</span>{" "}
        outbound.
      </h1>
      <p className="text-base sm:text-[20px] text-white/50 max-w-[550px] mx-auto">
        Wizia lets you train, activate, and optimize aiDRs. Take your outbound
        to new levels of performance and efficiency.
      </p>
      <Button className="flex items-center justify-center gap-1 w-full md:w-auto mx-auto">
        Sign Up for the Beta
        <LiaExternalLinkSquareAltSolid className="text-lg" />
      </Button>
    </section>
  );
}

export default Stared;
