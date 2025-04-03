import Link from "next/link";
import { Container } from "./components/Container";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <Container>
      <Title>Your New Project</Title>
      <p>Initial project template by /ramonexe
      for use of SSR rendering with Emotion without 'use client'</p>
      <Link href="/about">Learn More</Link>
    </Container>
  );
}