import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import Button from "../components/Button";

export default function About() {
    return (
        <>
            <Container>
                <Title>Next.js 14 and SSR Issues with 'use client'</Title>
                <h3>Why Next.js 14 with App Directory Struggles with Styled-Components and SSR (How Emoticon CSS Fixes It)</h3>
                <p><strong>Explanation:</strong></p>
                <p>Next.js 14 introduced the App Directory, which comes with a new way to handle rendering on the server and client using the <code>'use client'</code> directive. This breaks how styled-components typically work with SSR (Server-Side Rendering).</p>

                <p>Imagine you’re building a website with a lot of custom styles. Styled-components help by allowing you to define styles directly in your components, and SSR helps by sending a fully-rendered page from the server. This is great for SEO and faster page loads. However, styled-components need to be rendered both on the server and the client for everything to match.</p>

                <p>Here’s the problem: With Next.js 14's App Directory, the <code>'use client'</code> directive is required for components that will render on the client side. This forces styles to be injected on the client, meaning the server can't generate them in time, causing a mismatch between what the user sees initially (on the server) and what they see after the client loads (with client-side styles).</p>

                <p>Now, how does Emoticon CSS help? Emoticon CSS is a tool that allows CSS to be injected in a way that doesn't rely on JavaScript execution, solving the mismatch problem. It ensures that your styles are rendered on the server and delivered correctly, so you get the benefits of SSR and styled-components without breaking things.</p>

                <p>In simple terms, while <code>'use client'</code> messes with SSR because it forces client-side rendering, Emoticon CSS handles styling differently, so your page can load smoothly with the right styles, whether on the server or the client.</p>
                <Button icon={<FontAwesomeIcon icon={faArrowLeft} />} iconPosition="left" href="/">
                    Back
                </Button>
            </Container>
        </>
    );
}