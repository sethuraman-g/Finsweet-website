import { storage } from "../appwriteConfig";
import "./ButtonComponent.scss";

interface ButtonTextType {
  text?: string;
  handleClick?: () => void;
  onHide?: () => void;
}

export const ButtonComponent = (props: ButtonTextType) => {
  const { text, handleClick, onHide } = props;
  const bucketId = "images";

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
        <img
          src={`${storage.getFilePreview(bucketId, "InsideButtonIcon").href}`}
          alt="svg"
          width={25}
        />
        <p className="m-2">{text} &#8594;</p>
      </button>
    </>
  );
};
