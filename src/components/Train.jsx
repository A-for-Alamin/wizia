import { RiCheckboxCircleLine } from "react-icons/ri";

function Train() {
  return (
    <section className="px-4 md:px-[48px]">
      <div className="bg-[url(./public/img/Train.png)] bg-no-repeat bg-cover rounded-3xl">
        <div className="text-center py-20 space-y-[30px]">
          <div>
            <h1 className="text-4xl md:text-[40px] font-semibold text-white font-montserrat">
              Train your aiDR on your...
            </h1>
            <h2 className="text-4xl md:text-[40px] text-primary mt-3 italic font-montserrat">
              prefered email st|
            </h2>
          </div>
          <p className="text-lg sm:text-[24px] text-white/60 px-2 sm:mx-0 font-workSans">
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </p>
          <div className="max-w-[600px] mx-auto grid md:grid-cols-2 place-items-center text-primary text-lg font-montserrat">
            <div className="flex items-center gap-2">
              <RiCheckboxCircleLine />
              <p>Quick to ramp</p>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckboxCircleLine />
              <p>Easy to optimize</p>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckboxCircleLine />
              <p>Quick to scale up</p>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckboxCircleLine />
              <p>Works with all your existing tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Train;
