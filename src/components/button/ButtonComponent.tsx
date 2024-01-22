import ButtonSvg from "../../assets/icons/button.svg";
import "./ButtonComponent.scss";

interface ButtonTextType {
  text?: string;
  handleClick?: () => void;
  onHide?: () => void;
}

export const ButtonComponent = (props: ButtonTextType) => {
  const { text, handleClick, onHide } = props;

  const onButtonClick = () => {
    handleClick?.();
    onHide?.();
  };

  return (
    <>
      <button
        type="submit"
        className="quote-button d-flex"
        onClick={onButtonClick}
      >
        <img src={ButtonSvg} alt="svg" width={25} />
        <p className="m-2">{text} &#8594;</p>
      </button>
    </>
  );
};
