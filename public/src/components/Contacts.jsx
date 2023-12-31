import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <div className="subtitle">
                <h3> User:</h3>
              </div>
              
              <h2>{currentUserName}</h2>
            </div>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    
                    <h3>  &nbsp;  {contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="brand">
            <img src={Logo} alt="logo" />
          </div> 
          
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
display: grid;
grid-template-rows: 10% 80% 10%; 
overflow: hidden;
background-color: #121212; 

.brand {
  display: flex;
  align-items: center;
  gap: 2rem; 
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #333; 

  img {
    height: 3rem; 
  }

  h3 {
    color: #fff;
    font-size: 1.5rem; 
  }
}


.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 1rem;
  padding: 1rem; 
  &::-webkit-scrollbar {
    width: 0.3rem; 
    &-thumb {
      background-color: #2276e2; 
      border-radius: 1rem;
    }
  }

  .contact {
    background-color: #1e1e1e; 
    min-height: 6rem; 
    width: 95%; 
    border-radius: 0.5rem; 
    padding: 0.5rem;
    display: flex;
    align-items: center;
    transition: background-color 0.3s; 

    &:hover {
      background-color: #333; 
    }

    .avatar img {
      height: 3.5rem; 
    }

    .username h3 {
      color: white;
      font-size: 1.2rem; 
    }
  }

  .selected {
    background-color: #2276e2; 
  }
}

.current-user {
  background-color: #252424; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  .avatar img {
    height: 4.5rem;
  }

  .username h2 {
    color: white;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .username h2 {
      font-size: 1.2rem; 
    }
  }
  .subtitle {
    color: #fff;
    
    font-size: 0.7rem; 
    

   
  }
}
`;
