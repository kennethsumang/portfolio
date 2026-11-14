"use client"

import { Button, Stack, Title, Text, Group, Anchor, Badge } from "@mantine/core";
import { IconMail, IconRosetteDiscountCheck, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import classes from "./HomeSection.module.css";

const HomeSection: React.FC = function () {

  function handleCertificationChipClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, certification: string) {
    e.preventDefault();
    switch (certification) {
      case 'Claude Certified Associate - Foundations':
        window.open('https://www.credly.com/badges/4ff4760e-e9d0-4860-8072-e8e162f8f05c/linked_in_profile', '_blank');
        break;
      case 'Technology Architect Associate':
        window.open('https://www.credly.com/badges/95627021-1eea-47be-9720-bd400a10d291/linked_in_profile', '_blank');
        break;
      default:
        break;
    }
  }

  function handleResumeClick() {
    window.open('/download/resume.pdf', '_blank')
  }

  return (
    <Stack mb="6em" justify="center">
      <Title order={1} id="home">Kenneth Sumang</Title>
      <Text>
        Senior Software Engineer with 8+ years of experience building scalable web applications.
      </Text>
      <Badge
        variant="light"
        color="blue"
        c="blue.9"
        size="md"
        radius="xl"
        fw={500}
        fz="sm"
        h="auto"
        px="14"
        py="6"
        tt="none"
        leftSection={<IconRosetteDiscountCheck size={18} />}
        className={classes.chip}
        onClick={(e) => handleCertificationChipClick(e, 'Claude Certified Associate - Foundations')}
      >
        Claude Certified Associate - Foundations
      </Badge>
      <Badge
        variant="light"
        color="blue"
        c="blue.9"
        size="md"
        radius="xl"
        fw={500}
        fz="sm"
        h="auto"
        px="14"
        py="6"
        tt="none"
        leftSection={<IconRosetteDiscountCheck size={18} />}
        className={classes.chip}
        onClick={(e) => handleCertificationChipClick(e, 'Technology Architect Associate')}
      >
        Technology Architect Associate
      </Badge>
      <Group gap="1em">
        <Anchor href="mailto:work@kennethsumang.com" target="_blank" aria-label="Email">
          <IconMail height={24} width={24} color="black" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/kenneth-sumang/" target="_blank" aria-label="LinkedIn">
          <IconBrandLinkedin height={24} width={24} color="black" />
        </Anchor>
        <Anchor href="https://github.com/kennethsumang" target="_blank" aria-label="GitHub">
          <IconBrandGithub height={24} width={24} color="black" />
        </Anchor>
      </Group>
      <Button w="8em" onClick={handleResumeClick} className={classes.resumeButton}>Resume</Button>
    </Stack>
  )
}

export default HomeSection;
