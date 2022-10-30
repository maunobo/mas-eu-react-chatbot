import React, { useContext } from "react";
import ChatBot from "react-simple-chatbot";
import classes from "./Chat.module.css";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../providers/User";

//red, green, blue, purple, pink
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
  userFontColor: "#4a4a4a",
  marginTop: "2rem"
};

const getFirstSteps = (userName = 'DummyUser') => [
  {
    id: "1",
    message: `Hello ${userName}!`,
    end: true,
  },
  {
    id: "2",
    message: `How can I help you today ${userName}?`,
    end: true,
  },
];

const Chat = () => {
  const { userName } = useContext(UserContext);
  const steps = getFirstSteps(userName);

  return (
    <div className={classes.contain}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
