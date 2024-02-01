import "./ButtonComponent.scss";

interface ButtonText {
  text?: string;
  handleClick?: () => void;
}

 const ReadMoreButtonComponent = (props: ButtonText) => {
  const { text, handleClick } = props;
  return (
    <>
      <button className="button-text" onClick={handleClick}>
        {text} <span className="arrow-color">&#8594;</span>
      </button>
    </>
  );
};

export default ReadMoreButtonComponent;
