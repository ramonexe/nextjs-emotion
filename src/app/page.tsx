import { Container } from "./components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Title } from "./components/Title";
import Button from "./components/Button";

export default function Home() {
  return (
    <Container>
      <Title>Your New Project</Title>
      <p>Initial project template by /ramonexe
      for use of SSR rendering with Emotion without 'use client'</p>
      <Button icon={<FontAwesomeIcon icon={faArrowRight} />} iconPosition="right" href="/about">
        Learn more
      </Button>
    </Container>
  );
}