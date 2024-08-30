"use client"

import { Stack, Timeline, Title, Text, List } from "@mantine/core";
import { IconBriefcaseFilled, IconSchool } from '@tabler/icons-react';

const HistorySection: React.FC = function () {
  return (
    <Stack>
      <Title order={2}>History</Title>
      <Timeline bulletSize={24} lineWidth={2} active={0}>
        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Accenture Inc.">
          <Text c="dimmed">
            <List>
              <List.Item>Review functional specifications and create technical specifications out of it.</List.Item>
              <List.Item>Implement and customize third-party libraries for diagramming and rich-text editing.</List.Item>
              <List.Item>Design, develop, and implement React front-end components.</List.Item>
              <List.Item>Utilize CSS and other CSS frameworks, such as Tailwind, in building user-friendly user interface.</List.Item>
              <List.Item>Create unit tests for the service layer in the application.</List.Item>
            </List>
          </Text>
          <Text size="xs" mt={4}>2023 - Present</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Cafe24 Philippines Inc.">
          <Text c="dimmed">
            <List>
              <List.Item>Developed new features, improvements and bug fixes for the numerous internal and client-facing applications.</List.Item>
              <List.Item>Maintained existing system for internal use.</List.Item>
              <List.Item>Led, guided, and coached a team of junior developers in delivering high-quality products.</List.Item>
              <List.Item>Created technical architectures for implementation in our team&apos;s projects.</List.Item>
              <List.Item>Created development plans and review documents for new features and improvements.</List.Item>
              <List.Item>Created deployment plans for software distributions.</List.Item>
            </List>
          </Text>
          <Text size="xs" mt={4}>2018 - 2023</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBriefcaseFilled size={12} />} title="Curo Teknika Inc.">
          <Text c="dimmed">
            <List>
              <List.Item>Developed an app that monitors, displays and processes the time-in and time-out of an employee and computes their gross salary.</List.Item>
            </List>
          </Text>
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