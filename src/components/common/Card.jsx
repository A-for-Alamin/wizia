function Card({ img, title, description }) {
  return (
    <div className="w-full md:w-[384px] space-y-4 pe-4 p-3 md:p-8 rounded-xl transition scale-80 md:scale-100 hover:translate-y-1 hover:bg-primary/15 hover:border-2 hover:border-primary">
      <img src={img} />
      <h2 className="text-[28px] text-white pt-2 font-montserrat">{title}</h2>
      <p className="text-[22px] text-white/50 font-workSans">{description}</p>
    </div>
  );
}

export default Card;
