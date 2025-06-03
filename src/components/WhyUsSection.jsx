import SectionHeader from "./SectionHeader";
import "./WhyUsSection.css";
import WUItem from "./WUItem";

const WhyUsSection = () => {
  return (
    <section className="why-us">
      <SectionHeader title={"Why choose us?"} />
      <div className="wu-items">
        <WUItem
          imageUrl={"/assets/why-us/Feature 1.png"}
          imageAlt={"Secure Feature 1"}
          title={"safe & secure gaming"}
          desc={
            "Praesent facilisis massa vitae sapien rutrum, a posuere. Etiam sollicitudin neque ac malesuada."
          }
        />
        <WUItem
          imageUrl={"/assets/why-us/Feature 2.png"}
          imageAlt={"Feature 2"}
          title={"variety of games"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper vulputate magna."
          }
        />
        <WUItem
          imageUrl={"/assets/why-us/Feature 3.png"}
          imageAlt={"Feature 3"}
          title={"fast & better experience"}
          desc={
            "Nullam porta at orci non molestie. Aenean vel diam erat. Nullam dignissim lorem pulvinar dui finibus ultrices."
          }
        />
        <WUItem
          imageUrl={"/assets/why-us/Feature 4.png"}
          imageAlt={"Feature 4"}
          title={"improved look & feel"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper vulputate magna."
          }
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
