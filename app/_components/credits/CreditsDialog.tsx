"use client"

import { Anchor, List, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

interface LogoAttribution {
  name: string;
  license?: string;
  licenseUrl?: string;
  source: string;
  sourceUrl: string;
}

const CreditsDialog: React.FC = function () {
  const [opened, { toggle, close }] = useDisclosure(false);

  const iconAttribution: LogoAttribution[] = [
    {
      name: 'Person',
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/google/material-design-icons/blob/master/LICENSE',
      source: 'Google',
      sourceUrl: 'https://github.com/google/material-design-icons'
    },
    {
      name: 'jQuery',
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/Templarian/MaterialDesign/blob/master/LICENSE',
      source: 'Pictogrammers',
      sourceUrl: 'https://github.com/Templarian/MaterialDesign'
    },
  ];
  
  return (
    <>
      <Anchor onClick={toggle}>Credits</Anchor>

      <Modal
        opened={opened}
        withCloseButton
        onClose={close}
        title="Credits"
        size="lg"
        radius="md"
        centered
      >
        <Stack pr="xs">
          <Text fw={700}>Frameworks and Libraries</Text>
          <List>
            <List.Item key="next">
              Framework by <Anchor href="https://nextjs.org/" target="_blank">Next.js</Anchor> licensed under <Anchor href="https://github.com/vercel/next.js/blob/main/license.md" target="_blank">MIT License</Anchor>.
            </List.Item>
            <List.Item key="mantine">
              UI Library by <Anchor href="https://mantine.dev/" target="_blank">Mantine</Anchor> licensed under <Anchor href="https://github.com/mantinedev/mantine/blob/master/LICENSE" target="_blank">MIT License</Anchor>.
            </List.Item>
            <List.Item key="tabler">
              Icon component library by <Anchor href="https://tabler.io/" target="_blank">Tabler.io</Anchor> licensed under <Anchor href="https://github.com/tabler/tabler?tab=MIT-1-ov-file#readme" target="_blank">MIT License</Anchor>.
            </List.Item>
          </List>
          <Text fw={700}>Logo Attributions</Text>
          <List>
            {
              iconAttribution.map((attr) => {
                return (
                  <List.Item key={attr.name}>
                    <LogoAttributionComponent {...attr} />
                  </List.Item>
                )
              })
            }
          </List>
        </Stack>
      </Modal>
    </>
  )
}

const LogoAttributionComponent: React.FC<LogoAttribution> = function (props) {
  if (!props.license || !props.licenseUrl) {
    return <Text>
      {props.name} icon by <Anchor href={props.sourceUrl} target="_blank">{props.source}</Anchor>.
    </Text>
  }

  return (
    <Text>
      {props.name} icon by <Anchor href={props.sourceUrl} target="_blank">{props.source}</Anchor> licensed under <Anchor href={props.licenseUrl} target="_blank">{props.license || 'a custom license'}</Anchor>.
    </Text>
  )
}

export default CreditsDialog;