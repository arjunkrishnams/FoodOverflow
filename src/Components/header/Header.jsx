import "./header.css";
import "./ResponsiveHeader.css";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header>
      <div className="wraper">
        <div className="logo">
          <h1>Food Overflow</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about" onclick="scroll">About Us</a>
            </li>
            <li>  
              <a href="#testimonial" onclick="scroll">Review</a>
            </li>
            <li>
              <a href="/NgoSignup">NGO Signup</a>
            </li>
            <li>
              <a href="/DonorSignup">Donor Signup</a>
            </li>
          </ul>
          <div className="btn">
            <button type="text"><a href="/LoginDonor">Login</a></button>
            
 
          </div>
        </nav>
      </div>
    </header>
  );
};
