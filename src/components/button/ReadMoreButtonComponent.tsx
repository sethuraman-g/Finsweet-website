import "./ButtonComponent.scss"

interface ButtonText {
    text : string
}

export const ReadMoreButtonComponent = (props: ButtonText) => {
    const {text} = props;
  return (
    <>
      <button className='button-text'>{text} <span className='arrow-color'>&#8594;</span></button> 
    </>
  )
}
