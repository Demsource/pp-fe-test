import "./SectionHeader.css";

const SectionHeader = ({ title }) => {
  return (
    <header>
      <h4>{title}</h4>
      <div className="underscore"></div>
    </header>
  );
};

export default SectionHeader;
