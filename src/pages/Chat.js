import React, { useContext } from "react";
import ChatBot from "react-simple-chatbot";
import classes from "./Chat.module.css";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../providers/User";

let botColor;
let userColor;

function assignRandomColorsToTwoPersons() {
  const colors = ['red', 'green', 'blue', 'purple', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  botColor = randomColor;
  colors.splice(randomIndex, 1);
  userColor = colors[Math.floor(Math.random() * colors.length)];
}

assignRandomColorsToTwoPersons();

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: botColor,
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: botColor,
  botFontColor: "#fff",
  userBubbleColor: userColor,
  userFontColor: "#fff",
};

const getFirstSteps = (userName = 'DummyUser') => [
    {
      id: "1",
      message: `Hello ${userName}!`,
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: `How can I help you today ${userName}?`,
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "NO can do! Bye!",
      end: true,
    }
];

const Chat = () => {
  const { userName } = useContext(UserContext);
  const steps = getFirstSteps(userName);

  return (
    <div className={classes.chatContainer}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
