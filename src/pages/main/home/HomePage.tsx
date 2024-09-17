import React, { useContext, useState } from "react";
import HomePageStyle from "./HomePage.style";
import Textbox from "components/textbox/Textbox";
import AppContext from "contexts/AppContext";

const { Container } = HomePageStyle;

const HomePage = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      <Textbox label="username" value={value} onChange={setValue} />
    </Container>
  );
};

export default HomePage;
