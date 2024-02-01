import "./PopupPage.scss";
import { Modal } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { useRef } from "react";
import { ID } from "appwrite";
import { databases } from "../../components/appwriteConfig";

interface PopupProps {
  open?: boolean;
  close?: () => void;
}

interface PopupFormData {
  nameInput?: string;
  emailInput?: string;
  subjectInput?: string;
  messageInput?: string;
}

export const PopupPage = ({ open, close }: PopupProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    await e.preventDefault();
    try {
      const formData: PopupFormData = {
        nameInput: nameRef?.current?.value,
        emailInput: emailRef?.current?.value,
        subjectInput: subjectRef?.current?.value,
        messageInput: messageRef?.current?.value,
      };
      const promise = await databases.createDocument(
        "65a75267c181c26e7f15",
        "65a7a91660b4d776a89a",
        ID.unique(),
        {
          name: formData.nameInput,
          email: formData.emailInput,
          subject: formData.subjectInput,
          message: formData.messageInput,
        }
      );
      console.log("Document created:", promise);
      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log("Error creating document:", error);
    }
  };

  return (
    <>
      <Modal show={open} onHide={close}>
        <Modal.Header closeButton>
          <div>
            <h3 className="fw-bold">Have a Question ?</h3>
            <h4 className="fw-bold">Let's Get in Touch with us 👋</h4>
            <p className="text text-muted">
              Fill up the Form and our team will get back to within 24 hrs
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="input-control"
              ref={nameRef}
            />
            <br />
            <br />

            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter your E-mail"
              className="input-control"
              ref={emailRef}
            />
            <br />
            <br />

            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              id="subject"
              placeholder="Enter your Concern"
              className="input-control"
              ref={subjectRef}
            />
            <br />
            <br />

            <label htmlFor="message">Message</label>
            <br />
            <input
              type="text"
              id="message"
              placeholder="Type your Message"
              className="input-control"
              ref={messageRef}
            />
            <br />
            <br />

            <ButtonComponent text="Send Message" onHide={close} />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
