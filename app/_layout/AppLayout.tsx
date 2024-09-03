"use client"

import { AppShell, Burger, Group, UnstyledButton, Text, Stack, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppLayout.module.css";
import CreditsDialog from "../_components/credits/CreditsDialog";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = function ({ children }) {
  const [opened, { toggle }] = useDisclosure();

  function handleNavClick(hash: string, toggleNav: boolean = false) {
    if (toggleNav) {
      toggle();
    }

    if (hash === 'home') {
      window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(hash);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo(0, top - 60)
    }
  }
  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 85 }}
      padding="md"
      offsetScrollbars
      style={{ height: "100vh", display: "flex" }}
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" className={classes.navbargroup}>
            <Text size="lg">Portfolio</Text>
            <Group ml="xl" gap={20} visibleFrom="sm">
              <UnstyledButton
                className={classes.control}
                onClick={() => handleNavClick('home')}
              >
                Home
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={() => handleNavClick('history')}
              >
                History
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                onClick={() => handleNavClick('certificates')}
              >
                Certificates
              </UnstyledButton>
              {/* <UnstyledButton className={classes.control} disabled>Projects</UnstyledButton>
              <UnstyledButton className={classes.control} disabled>Articles</UnstyledButton> */}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Stack ml="sm" gap="xs">
          <UnstyledButton
            className={classes.navcontrol}
            onClick={() => handleNavClick('home', true)}
          >
            Home
          </UnstyledButton>
          <UnstyledButton
            className={classes.navcontrol}
            onClick={() => handleNavClick('skills', true)}
          >
            Skills
          </UnstyledButton>
          <UnstyledButton
            className={classes.navcontrol}
            onClick={() => handleNavClick('history', true)}
          >
            History
          </UnstyledButton>

          <UnstyledButton
                className={classes.navcontrol}
                onClick={() => handleNavClick('certificates', true)}
              >
                Certificates
              </UnstyledButton>
          {/* <UnstyledButton className={classes.control} disabled>Projects</UnstyledButton>
          <UnstyledButton className={classes.control} disabled>Articles</UnstyledButton>*/}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main
        px={{ base: 'md', xs: 'md', sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl' }}
      >
        {children}
      </AppShell.Main>

      <AppShell.Footer>
        <div className={classes.footer}>
          <Stack align="center" gap={0}>
            <Text size="sm">
              All trademarks, logos and brand names are the property of their respective owners.
            </Text>
            <div>
              <CreditsDialog />
            </div>
          </Stack>
        </div>
      </AppShell.Footer>
    </AppShell>
  )
}

export default AppLayout;