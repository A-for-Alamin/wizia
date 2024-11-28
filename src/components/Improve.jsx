function Improve() {
  return (
    <section className="px-4 md:px-[48px]">
      <div className="bg-[url(/img/improve.png)] bg-no-repeat bg-cover bg-center rounded-3xl p-5 md:p-16 space-y-[94px]">
        <div className="w-full md:w-1/2">
          <h2 className="text-[32px] font-semibold font-montserrat text-white">
            Allocate effort where your reps make an inpact.
          </h2>
          <h3 className="text-[32px] font-medium font-montserrat italic text-primary my-3">
            Let us handle the rest.
          </h3>
          <p className="md:text-[20px] font-light text-white/50 font-workSans">
            Keep your reps “in the air” -- out in the field and on the phone
            where they can build relationships.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 font-montserrat">
          <div className="space-y-2.5 md:w-[174px]">
            <h1 className="text-primary text-[40px] font-bold">32%</h1>
            <p className="text-white/50 text-[20px] font-semibold">
              Improvement in Open Rates
            </p>
          </div>
          <div className="space-y-2.5 md:w-[174px]">
            <h1 className="text-primary text-[40px] font-bold">75%</h1>
            <p className="text-white/50 text-[20px] font-semibold">
              Improvement in Open Rates
            </p>
          </div>
          <div className="space-y-2.5 md:w-[174px]">
            <h1 className="text-primary text-[35px] sm:text-[40px] font-bold">
              35%
            </h1>
            <p className="text-white/50 text-base sm:text-[20px] font-semibold">
              Improvement in Open Rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Improve;
