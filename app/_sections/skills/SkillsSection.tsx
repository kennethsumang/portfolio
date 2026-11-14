"use client"

import { Grid, Stack, Title } from "@mantine/core";
import SkillContainer from "../../_components/skills/SkillContainer";
import { IconBrandBootstrap, IconBrandDocker, IconBrandGit, IconBrandJavascript, IconBrandJira, IconBrandLaravel, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandVue } from "@tabler/icons-react";
import React from "react";

interface Skill {
  logo?: string;
  name: string;
  description: string;
  component?: React.ReactNode;
}

const SkillsSection: React.FC = function () {
  const frontendSkillList: Skill[] = [
    {
      name: 'JavaScript',
      description: 'test',
      component: <IconBrandJavascript height={24} width={24} aria-label="JavaScript" />
    },
    {
      name: 'TypeScript',
      description: 'test',
      component: <IconBrandTypescript height={24} width={24} aria-label="TypeScript" />
    },
    {
      name: 'React',
      description: 'test',
      component: <IconBrandReact height={24} width={24} aria-label="React" />
    },
    {
      name: 'NextJS',
      description: 'test',
      component: <IconBrandNextjs height={24} width={24} aria-label="NextJS" />
    },
    {
      name: 'Vue',
      description: 'test',
      component: <IconBrandVue height={24} width={24} aria-label="Vue" />
    },
    {
      logo: '/logos/sapui5.svg',
      name: 'SAPUI5',
      description: 'test'
    },
    {
      logo: '/logos/jquery.svg',
      name: 'jQuery',
      description: 'test'
    },
    {
      name: 'Tailwind',
      description: 'test',
      component: <IconBrandTailwind height={24} width={24} aria-label="Tailwind" />
    },
    {
      name: 'Bootstrap',
      description: 'test',
      component: <IconBrandBootstrap height={24} width={24} aria-label="Bootstrap" />
    },
    {
      logo: '/logos/jest.svg',
      name: 'Jest',
      description: 'test'
    },
  ];

  const backendSkillList: Skill[] = [
    {
      name: 'Laravel',
      description: 'test',
      component: <IconBrandLaravel height={24} width={24} aria-label="Laravel" />
    },
    {
      name: 'PHP',
      description: 'test',
      component: <IconBrandPhp height={24} width={24} aria-label="PHP" />
    },
    {
      logo: '/logos/express.svg',
      name: 'Express',
      description: 'test'
    },
    {
      name: 'NodeJS',
      description: 'test',
      component: <IconBrandNodejs height={24} width={24} aria-label="NodeJS" />
    }
  ];

  const databaseSkillList: Skill[] = [
    {
      name: 'MySQL',
      description: 'test',
      component: <IconBrandMysql height={24} width={24} aria-label="MySQL" />
    },
    {
      logo: '/logos/postgresql.svg',
      name: 'PostgreSQL',
      description: 'test'
    },
  ]

  const toolsSkillList: Skill[] = [
    {
      name: 'Git',
      description: 'test',
      component: <IconBrandGit height={24} width={24} aria-label="Git" />
    },
    {
      name: 'Docker',
      description: 'test',
      component: <IconBrandDocker height={24} width={24} aria-label="Docker" />
    },
    {
      logo: '/logos/sonarqube.svg',
      name: 'SonarQube',
      description: 'test'
    },
    {
      name: 'Jira',
      description: 'test',
      component: <IconBrandJira height={24} width={24} aria-label="Jira" />
    }
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