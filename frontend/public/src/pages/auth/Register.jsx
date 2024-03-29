import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Form from "../../components/Shared/Form/Form";

const Register = () => {
  const wordsList = [
    "User Registration and Profile Management \nDonor Management \nInventory Management \nBlood Requests and Distribution \nEmergency Response System \nReporting and Analytics \nSecurity and Privacy",
  ];

  // const formattedWordsList = wordsList.map(word => `- ${word}`);

  const [typingEffect] = useTypewriter({
    words: wordsList,
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <>
      <div className="row g-0">
        <div
          className="col-md-8 form-banner"
          style={{
            backgroundImage: 'url("/assests/banner-2.webp")',
            opacity: 0.8,
            objectFit: "cover",
            filter: "brightness(40%)",
            backgroundRepeat: "no-repeat",
            // height: "100vh",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <div
            className="typewriter-container text-left position-absolute top-4 start-0"
            style={{
              position: "absolute",
              zIndex: 1,
              fontFamily: "Protest Guerrilla, sans-serif",
              fontSize: "24px",
              margin: "180px",
              marginLeft: "100px",
              fontWeight: "bold",
              color: "black",
              fontStyle: "italic",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>
              Welcome To Blood Banking Application
            </h3>
            <ul className="text-black" style={{ color: "black" }}>
              {typingEffect.split("\n").map((word, index) => (
                <li key={index}>
                  {index === 0 ? "" : ""} {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={"REGISTER"} submitBtn={"REGISTER"} formType={'register'} />
        </div>
      </div>
    </>
  );
};

export default Register;
