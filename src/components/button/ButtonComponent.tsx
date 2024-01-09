import ButtonSvg from "../../assets/icons/button.svg"
import "./ButtonComponent.scss"


interface ButtonTextType {
    text?: string,
    handleClick?: ()=>void;
}

export const ButtonComponent = (props: ButtonTextType) => {
    const {text, handleClick} = props;

  return (
    <>
      <button className='quote-button d-flex' onClick={handleClick}>
        <img src={ButtonSvg} alt="" width="25px"/>
        <p className='m-2'>{text} &#8594;</p>
      </button>
    </>
  )
}
