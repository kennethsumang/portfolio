"use client"

import { Divider, Stack, Title } from "@mantine/core";
import CertificateContainer from "../../_components/certificates/CertificateContainer";
import React from "react";
import { certificateList } from "../../_constants/certificates";



const CertificatesSection: React.FC = function () {
  return (
    <Stack gap={0}>
      <Title order={2} id="certificates">My Certificates</Title>
      {
        certificateList.map((certificate, index) => {
          const isLast = index + 1 === certificateList.length;
          return (
            <div key={certificate.name} style={{ paddingTop: index === 0 ? "1rem": "0"}}>
              <CertificateContainer {...certificate} />
              {!isLast && <Divider my="sm" />}
            </div>
          )
        })
      }
    </Stack>
  );
}

export default CertificatesSection;