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
      name: 'School',
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/google/material-design-icons/blob/master/LICENSE',
      source: 'Google',
      sourceUrl: 'https://github.com/google/material-design-icons'
    },
    {
      name: 'Accenture',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'Bootstrap',
      source: 'Bootstrap',
      sourceUrl: 'https://getbootstrap.com/docs/4.0/about/brand'
    },
    {
      name: 'ChatGPT',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/brand/'
    },
    {
      name: 'Confluence',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'Coursera',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'Docker',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://www.docker.com/legal/trademark-guidelines/',
      source: 'Docker',
      sourceUrl: 'https://www.docker.com/company/newsroom/media-resources/'
    },
    {
      name: 'edX',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'Express',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'Git',
      license: 'Creative Commons Attribution 3.0 Unported License',
      licenseUrl: 'https://git-scm.com/downloads/logos',
      source: 'Git',
      sourceUrl: 'https://git-scm.com/downloads/logos'
    },
    {
      name: 'Github',
      source: 'Github',
      sourceUrl: 'https://github.com/logos'
    },
    {
      name: 'JavaScript',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'Jest',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'Jira',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'jQuery',
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/Templarian/MaterialDesign/blob/master/LICENSE',
      source: 'Pictogrammers',
      sourceUrl: 'https://github.com/Templarian/MaterialDesign'
    },
    {
      name: 'Laravel',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'LinkedIn',
      source: 'LinkedIn',
      sourceUrl: 'https://brand.linkedin.com/downloads'
    },
    {
      name: 'MySQL',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'NextJS',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'NodeJS',
      source: 'NodeJS',
      sourceUrl: 'https://nodejs.org/en/about/branding'
    },
    {
      name: 'PHP',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'PostgreSQL',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'React',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'SonarQube',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'UI5',
      license: '',
      licenseUrl: 'https://openui5.org/guidelines/',
      source: 'OpenUI5 Team',
      sourceUrl: 'https://openui5.org/guidelines/'
    },
    {
      name: 'Tailwind',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'Typescript',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'Udemy',
      source: 'Udemy',
      sourceUrl: 'https://support.udemy.com/hc/en-us/articles/8926753692567-Trademark-Usage-Guidelines'
    },
    {
      name: 'Vue',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
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
            <List.Item key="mantine">
              Framework by <Anchor href="https://nextjs.org/" target="_blank">Next.js</Anchor> licensed under <Anchor href="https://github.com/vercel/next.js/blob/main/license.md" target="_blank">MIT License</Anchor>.
            </List.Item>
            <List.Item key="mantine">
              UI Library by <Anchor href="https://mantine.dev/" target="_blank">Mantine</Anchor> licensed under <Anchor href="https://github.com/mantinedev/mantine/blob/master/LICENSE" target="_blank">MIT License</Anchor>.
            </List.Item>
            <List.Item key="mantine">
              Typing animation library by <Anchor href="https://github.com/mattboldt/typed.js" target="_blank">Matt Boldt</Anchor> licensed under <Anchor href="https://github.com/mattboldt/typed.js#MIT-1-ov-file" target="_blank">MIT License</Anchor>.
            </List.Item>
            <List.Item key="mantine">
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