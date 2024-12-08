"use client"

import { Grid, Stack, Title } from "@mantine/core";
import SkillContainer from "../../_components/skills/SkillContainer";
import React from "react";

interface Skill {
  logo: string;
  name: string;
  description: string;
}

const SkillsSection: React.FC = function () {
  const frontendSkillList: Skill[] = [
    {
      logo: '/logos/javascript.svg',
      name: 'JavaScript',
      description: 'test',
    },
    {
      logo: '/logos/typescript.svg',
      name: 'TypeScript',
      description: 'test',
    },
    {
      logo: '/logos/react.svg',
      name: 'React',
      description: 'test',
    },
    {
      logo: '/logos/nextjs.svg',
      name: 'NextJS',
      description: 'test',
    },
    {
      logo: '/logos/vue.svg',
      name: 'Vue',
      description: 'test',
    },
    {
      logo: '/logos/sapui5.svg',
      name: 'SAPUI5',
      description: 'test',
    },
    {
      logo: '/logos/jquery.svg',
      name: 'jQuery',
      description: 'test',
    },
    {
      logo: '/logos/tailwind.svg',
      name: 'Tailwind',
      description: 'test',
    },
    {
      logo: '/logos/bootstrap.svg',
      name: 'Bootstrap',
      description: 'test',
    },
    {
      logo: '/logos/jest.svg',
      name: 'Jest',
      description: 'test',
    },
  ];

  const backendSkillList: Skill[] = [
    {
      logo: '/logos/laravel.svg',
      name: 'Laravel',
      description: 'test',
    },
    {
      logo: '/logos/php.svg',
      name: 'PHP',
      description: 'test',
    },
    {
      logo: '/logos/express.svg',
      name: 'Express',
      description: 'test',
    },
    {
      logo: '/logos/nodejs.svg',
      name: 'NodeJS',
      description: 'test',
    }
  ];

  const databaseSkillList: Skill[] = [
    {
      logo: '/logos/mysql.svg',
      name: 'MySQL',
      description: 'test',
    },
    {
      logo: '/logos/postgresql.svg',
      name: 'PostgreSQL',
      description: 'test',
    },
  ]

  const toolsSkillList: Skill[] = [
    {
      logo: '/logos/git.svg',
      name: 'Git',
      description: 'test',
    },
    {
      logo: '/logos/docker.svg',
      name: 'Docker',
      description: 'test',
    },
    {
      logo: '/logos/openai.svg',
      name: 'ChatGPT',
      description: 'test',
    },
    {
      logo: '/logos/jira.svg',
      name: 'Jira',
      description: 'test',
    },
    {
      logo: '/logos/confluence.svg',
      name: 'Confluence',
      description: 'test',
    },
  ];

  return (
    <Stack>
      <Title order={2} id="skills">My Skills</Title>

      <Title order={3}>Frontend</Title>
      <Grid gutter={{ base: 10 }} columns={24}>
        {
          frontendSkillList.map((skill) => {
            return (
              <Grid.Col span={{ base: 12, xs: 8, sm: 6, md: 4, lg: 4, xl: 3 }} key={skill.name} >
                <SkillContainer {...skill} />
              </Grid.Col>
            );
          })
        }
      </Grid>

      <Title order={3}>Backend</Title>
      <Grid gutter={{ base: 10 }} columns={24}>
        {
          backendSkillList.map((skill) => {
            return (
              <Grid.Col span={{ base: 12, xs: 8, sm: 6, md: 4, lg: 4, xl: 3 }} key={skill.name} >
                <SkillContainer {...skill} />
              </Grid.Col>
            );
          })
        }
      </Grid>

      <Title order={3}>Databases</Title>
      <Grid gutter={{ base: 10 }} columns={24}>
        {
          databaseSkillList.map((skill) => {
            return (
              <Grid.Col span={{ base: 12, xs: 8, sm: 6, md: 4, lg: 4, xl: 3 }} key={skill.name} >
                <SkillContainer {...skill} />
              </Grid.Col>
            );
          })
        }
      </Grid>

      <Title order={3}>Tools</Title>
      <Grid gutter={{ base: 10 }} columns={24}>
        {
          toolsSkillList.map((skill) => {
            return (
              <Grid.Col span={{ base: 12, xs: 8, sm: 6, md: 4, lg: 4, xl: 3 }} key={skill.name} >
                <SkillContainer {...skill} />
              </Grid.Col>
            );
          })
        }
      </Grid>
    </Stack>
  );
}

export default SkillsSection;