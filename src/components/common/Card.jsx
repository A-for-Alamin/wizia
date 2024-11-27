function Card({ img, title, description }) {
  return (
    <div className="w-full md:w-[384px] space-y-4 pe-4 pt-16 md:pt-28 scale-80 md:scale-100">
      <img src={img} />
      <h2 className="text-[28px] text-white pt-2 font-montserrat">{title}</h2>
      <p className="text-[22px] text-white/50 font-workSans">{description}</p>
    </div>
  );
}

export default Card;
