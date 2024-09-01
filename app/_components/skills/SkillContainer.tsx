import { Group, Paper, Popover, Stack, Text } from "@mantine/core";
import Image from "next/image";
import classes from "./SkillContainer.module.css";

interface Props {
  logo: string;
  name: string;
  description: string;
}

const SkillContainer: React.FC<Props> = function (props) {
  return (
    // <Popover position="bottom" withArrow shadow="md">
    //   <Popover.Target>
        <Paper shadow="sm" p="lg" className={classes.card}>
          <Stack justify="center">
            <Group justify="center">
              <Image src={props.logo} alt={`${props.name} logo.`} height={24} width={24} />
            </Group>
            <Group justify="center">
              <Text size="md">{props.name}</Text>
            </Group>
          </Stack>
        </Paper>
      // </Popover.Target>
      // <Popover.Dropdown>
      //   <Text size="xs">{props.description}</Text>
      // </Popover.Dropdown>
    // </Popover>
  )
}

export default SkillContainer;