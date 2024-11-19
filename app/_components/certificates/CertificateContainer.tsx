"use client"

import { Anchor, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import classes from "./CertificateContainer.module.css";
import React from "react";

interface Props {
  name: string;
  issuer: string;
  issuedAt: string;
  url: string;
  logo: string;
}

const CertificateContainer: React.FC<Props> = function (props) {
  return (
    <Group gap="md" align="start" className={classes.parentcontainer} wrap="nowrap">
      <Image src={props.logo} alt={props.issuer} height={24} width={24} style={{ marginTop: "0.5em" }} />
      <Stack gap={0}>
        <Anchor href={props.url} target="_blank">
          <Text fw={700}>{props.name}</Text>
        </Anchor>
        <Text>{props.issuer}</Text>
        <Text c="dimmed">{props.issuedAt}</Text>
      </Stack>
    </Group>
  );
}

export default CertificateContainer;