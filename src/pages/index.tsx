import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { ButtonBar } from "../components/ButtonBar";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Container>
      <ButtonBar>
        <h1>tema: {theme === "dark" ? "dark" : "light"}</h1>
        <Button color="red">Teste vermelho</Button>
        <Button color="red" css={{ backgroundColor: "lightblue" }}>
          Teste vermelho
        </Button>
        <Button onClick={toggleTheme} color="green">
          Teste verde
        </Button>
      </ButtonBar>
    </Container>
  );
};

export default Home;
