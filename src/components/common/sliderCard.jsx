import { VscQuote } from "react-icons/vsc";

function SliderCard({ desc, name, tag }) {
  return (
    <div className="max-w-[920px] mx-auto px-3 py-1 text-center">
      <VscQuote className="mx-auto text-7xl p-4 bg-primary/25 text-primary rounded-full scale-80 md:scale-100" />
      <p className="my-5 md:my-11 text-2xl md:text-[32px] font-light text-white">
        {desc}
      </p>
      <h2 className="text-xl md:text-2xl text-primary font-semibold">{name}</h2>
      <p className="text-base md:text-[20px] text-[#96ACAF]">{tag}</p>
    </div>
  );
}

export default SliderCard;
