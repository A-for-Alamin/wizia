import Card from "./common/Card";

function Features() {
  return (
    <section className="container flex justify-center flex-wrap md:flex-nowrap md:gap-6 pb-16 md:pb-28 px-4">
      <Card
        img="img/pen.png"
        title="You’re in Control"
        description="aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
      />

      <Card
        img="img/Infinitely.png"
        title="Infinitely Scalable"
        description="Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
      />

      <Card
        img="img/Incredibly.png"
        title="Incredibly Flexible"
        description="Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
      />
    </section>
  );
}

export default Features;
