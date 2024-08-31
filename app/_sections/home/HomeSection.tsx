"use client"

import { Button, Stack, Title, Text } from "@mantine/core";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HomeSection: React.FC = function () {
  const typingElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      strings: [
        'I am an experienced frontend web developer.',
        'I am an experienced backend web developer.',
        'I am an passionate learner.',
        'I am a tech enthusiast.'
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  function handleResumeClick() {
    window.open('/download/resume.pdf', '_blank')
  }

  return (
    <Stack mb="6em">
      <Title order={1} id="home">Kenneth Sumang</Title>
      <div style={{ display: 'flex' }}>
        <Text ref={typingElement} />
      </div>
      <Button w="8em" onClick={handleResumeClick}>Resume</Button>
    </Stack>
  )
}

export default HomeSection;