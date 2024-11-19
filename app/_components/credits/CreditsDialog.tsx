"use client"

import { Anchor, List, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

interface LogoAttribution {
  name: string;
  license: string;
  licenseUrl: string;
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
      name: 'Accenture',
      license: 'Creative Commons Zero v1.0 Universal',
      licenseUrl: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
      source: 'Simple Icons Collaborators',
      sourceUrl: 'https://github.com/simple-icons/simple-icons'
    },
    {
      name: 'Bootstrap',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
    },
    {
      name: 'ChatGPT',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      source: 'Arcticons',
      sourceUrl: 'https://github.com/Arcticons-Team/Arcticons'
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
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
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
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/Templarian/MaterialDesign/blob/master/LICENSE',
      source: 'Pictogrammers',
      sourceUrl: 'https://github.com/Templarian/MaterialDesign'
    },
    {
      name: 'Github',
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/Templarian/MaterialDesign/blob/master/LICENSE',
      source: 'Pictogrammers',
      sourceUrl: 'https://github.com/Templarian/MaterialDesign'
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
      license: 'Apache 2.0',
      licenseUrl: 'https://github.com/Templarian/MaterialDesign/blob/master/LICENSE',
      source: 'Pictogrammers',
      sourceUrl: 'https://github.com/Templarian/MaterialDesign'
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
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt',
      source: 'Gil Barbara',
      sourceUrl: 'https://github.com/gilbarbara/logos'
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
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      source: 'CoreUI',
      sourceUrl: 'https://github.com/coreui/coreui-icons'
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
  return (
    <Text>
      {props.name} icon by <Anchor href={props.sourceUrl} target="_blank">{props.source}</Anchor> licensed under <Anchor href={props.licenseUrl} target="_blank">{props.license || 'a custom license'}</Anchor>.
    </Text>
  )
}

export default CreditsDialog;