import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Proceed to sign up</button>
          <span>
            Already have an account?{" "}
             <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #121212;

form {
    width: 400px;
    padding: 2rem;
    background: #252424; 
    border: 1px solid #333;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
    display: flex;
    flex-direction: column;
    align-items: center;

    .brand {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        img {
            width: 200px;
            height: 150px;
            margin-right: 1rem;
        }

        h1 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fff; 
        }
    }

    input {
        width: 100%;
        padding: 0.75rem;
        margin: 0.5rem 0;
        background: #2a2a2a; 
        border: 1px solid #2276e2; 
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        color: #ddd; 
        transition: border-color 0.3s;

        &:focus {
            border-color: #2276e2; 
        }
    }

    button {
        width: 100%;
        padding: 0.75rem;
        margin: 0.5rem 0;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        background-color: #2276e2;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #2276e2;
        }
    }

    span {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #aaa;

        a {
            color: #2276e2;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: #2276e2;
            }
        }
    }
}

`;
