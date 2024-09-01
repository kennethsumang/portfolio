"use client"

import { Button, Stack, Title, Text, Group, Anchor } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import classes from "./HomeSection.module.css";

const HomeSection: React.FC = function () {
  const typingElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      strings: [
        'I am an experienced frontend web developer.',
        'I am an experienced backend web developer.',
        'I am an passionate learner.',
        'I am a techonlogy architect.',
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
    <Stack mb="6em" justify="center">
      <Title order={1} id="home">Kenneth Sumang</Title>
      <div className={classes.typingcontainer}>
        <Text ref={typingElement} />
      </div>
      <Group gap="1em">
        <Anchor href="mailto:work@kennethsumang.com" target="_blank">
          <IconMail height={24} width={24} color="black" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/kenneth-sumang/" target="_blank">
          <Image src="/logos/linkedin.svg" alt="LinkedIn logo" height={24} width={24} />
        </Anchor>
        <Anchor href="https://github.com/kennethsumang" target="_blank">
          <Image src="/logos/github.svg" alt="Github logo" height={24} width={24} />
        </Anchor>
      </Group>
      <Button w="8em" onClick={handleResumeClick}>Resume</Button>
    </Stack>
  )
}

export default HomeSection;