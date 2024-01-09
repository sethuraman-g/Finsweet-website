import "./PopupPage.scss";
import { Modal } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";

interface PopupProps {
    open?: boolean,
    close?: () => void
}
export const PopupPage = ({open, close}: PopupProps) => {
  return (
    <>
        <Modal show={open} onHide={close}>
            <Modal.Header closeButton>
            <div>
                <h3 className="fw-bold">Have a Question ?</h3>
                <h4 className="fw-bold">Let's Get in Touch with us 👋</h4>
                <p className="text text-muted">Fill up the Form and our team will get back to within 24 hrs</p>
            </div>
            </Modal.Header>
            <Modal.Body>
            <form>
                <label htmlFor="">Name</label><br />
                <input type="text" placeholder="Enter Your Name" className="input"/><br /><br />
                <label htmlFor="">E-mail</label><br />
                <input type="email" placeholder="Enter your E-mail" className="input"/><br /><br />
                <label htmlFor="">Subject</label><br />
                <input type="text" placeholder="Enter your Concern" className="input"/><br /><br />
                <label htmlFor="">Message</label><br />
                <input type="text" placeholder="Type your Message" className="input"/><br /><br />

                <ButtonComponent text="Send Message"/>
            </form>
            </Modal.Body>
        </Modal>
    </>
  )
}
