import React from "react";
import InputType from "../../components/Shared/Form/InputType";
import Form from "../../components/Shared/Form/Form";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useSelector } from "react-redux";
import Spinner from "../../components/Shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const wordsList = [
    "User Registration and Profile Management \nDonor Management \nInventory Management \nBlood Requests and Distribution \nEmergency Response System \nReporting and Analytics \nSecurity and Privacy",
  ];

  const formattedWordsList = wordsList.map((word) => `- ${word}`);

  const [typingEffect] = useTypewriter({
    words: wordsList,
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div
            className="col-md-8 form-banner"
            style={{
              backgroundImage: 'url("/assests/banner-1.webp")',
              opacity: 0.8,
              objectFit: "cover",
              filter: "brightness(30%)",
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
              <ul className="text-black" style={{ color: "white" }}>
                {typingEffect.split("\n").map((word, index) => (
                  <li key={index}>
                    {index === 0 ? "" : ""} {word}
                  </li>
                ))}
              </ul>
            </div>
            {/* <img src="./assests/banner-1.webp" alt="loginImage" /> */}
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"LOGIN"} submitBtn={"LOGIN"} formType={"login"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
