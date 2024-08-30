"use client"

import { AppShell, Burger, Group, UnstyledButton, Text, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = function ({ children }) {
  const [opened, { toggle }] = useDisclosure();
  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text size="lg">Portfolio</Text>
            <Group ml="xl" gap={40} visibleFrom="sm">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>History</UnstyledButton>
              <UnstyledButton className={classes.control}>Projects</UnstyledButton>
              <UnstyledButton className={classes.control}>Articles</UnstyledButton>
              <UnstyledButton className={classes.control}>Certificates</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Stack ml="md">
          <UnstyledButton className={classes.control}>Home</UnstyledButton>
          <UnstyledButton className={classes.control}>History</UnstyledButton>
          <UnstyledButton className={classes.control}>Projects</UnstyledButton>
          <UnstyledButton className={classes.control}>Articles</UnstyledButton>
          <UnstyledButton className={classes.control}>Certificates</UnstyledButton>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header on desktop are
        hidden on mobile in header and rendered in navbar instead.
      </AppShell.Main>

      <AppShell.Footer>
        <div className={classes.footer}>
          <Text size="sm">
            All trademarks, logos and brand names are the property of their respective owners.
          </Text>
        </div>
      </AppShell.Footer>
    </AppShell>
  )
}

export default AppLayout;