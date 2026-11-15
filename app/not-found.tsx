"use client";

import Link from "next/link";
import { Button, Stack, Text, Title } from "@mantine/core";

export default function NotFound() {
  return (
    <Stack
      align="center"
      justify="center"
      gap="md"
      px="1em"
      style={{ minHeight: "100vh" }}
    >
      <Text fw={700} fz="5rem" lh={1}>
        404
      </Text>
      <Title order={2}>Page not found</Title>
      <Text c="dimmed" ta="center">
        The page you are looking for doesn&apos;t exist or has been moved.
      </Text>
      <Button component={Link} href="/" variant="outline" color="black" mt="sm">
        Back to home
      </Button>
    </Stack>
  );
}
