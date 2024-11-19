"use client"

import { Stack, Timeline, Title, Text, List } from "@mantine/core";
import { IconBriefcaseFilled, IconSchool } from '@tabler/icons-react';
import React from "react";

const HistorySection: React.FC = function () {
  return (
    <Stack>
      <Title order={2} id="history">History</Title>
      <Timeline bulletSize={24} lineWidth={2} active={0}>
        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Accenture Inc.">
          <Text size="sm">Advanced App Engineering Senior Analyst</Text>
          <List>
            <List.Item><Text c="dimmed">Review functional specifications and create technical specifications out of it.</Text></List.Item>
            <List.Item><Text c="dimmed">Implement and customize third-party libraries for diagramming and rich-text editing.</Text></List.Item>
            <List.Item><Text c="dimmed">Design, develop, and implement React front-end components.</Text></List.Item>
            <List.Item><Text c="dimmed">Utilize CSS and other CSS frameworks, such as Tailwind, in building user-friendly user interface.</Text></List.Item>
            <List.Item><Text c="dimmed">Create unit tests for the service layer in the application.</Text></List.Item>
          </List>
          <Text size="xs" mt={4}>2023 - Present</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Cafe24 Philippines Inc.">
          <Text size="sm">Senior Web Developer</Text>
          <List>
            <List.Item><Text c="dimmed">Developed new features, improvements and bug fixes for the numerous internal and client-facing applications.</Text></List.Item>
            <List.Item><Text c="dimmed">Maintained existing system for internal use.</Text></List.Item>
            <List.Item><Text c="dimmed">Led, guided, and coached a team of junior developers in delivering high-quality products.</Text></List.Item>
            <List.Item><Text c="dimmed">Created technical architectures for implementation in our team&apos;s projects.</Text></List.Item>
            <List.Item><Text c="dimmed">Created development plans and review documents for new features and improvements.</Text></List.Item>
            <List.Item><Text c="dimmed">Created deployment plans for software distributions.</Text></List.Item>
          </List>
          <Text size="xs" mt={4}>2018 - 2023</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Curo Teknika Inc.">
          <Text size="sm">Application Developer Intern</Text>
          <List>
            <List.Item><Text c="dimmed">Developed an app that monitors, displays and processes the time-in and time-out of an employee and computes their gross salary.</Text></List.Item>
          </List>
          <Text size="xs" mt={4}>2018 - 2023</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconSchool size={12} />} title="Polytechnic University of the Philippines">
          <Text c="dimmed">Bachelor of Science in Computer Science</Text>
          <Text size="xs" mt={4}>2014 - 2018</Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

export default HistorySection;