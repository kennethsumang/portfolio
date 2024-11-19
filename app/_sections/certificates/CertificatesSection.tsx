"use client"

import { Divider, Stack, Title } from "@mantine/core";
import CertificateContainer from "../../_components/certificates/CertificateContainer";
import React from "react";

interface Certificate {
  name: string;
  issuer: string;
  issuedAt: string;
  url: string;
  logo: string;
}

const CertificatesSection: React.FC = function () {
  const certificateList: Certificate[] = [
    {
      name: 'Technology Architect Associate Certificate',
      url: 'https://www.credly.com/badges/95627021-1eea-47be-9720-bd400a10d291/linked_in_profile',
      issuer: 'Accenture Inc.',
      issuedAt: 'August 2024',
      logo: '/logos/accenture.svg'
    },
    {
      name: 'Cloud Security Fundamentals: Cloud Application Security',
      url: 'https://skillsoft.digitalbadges.skillsoft.com/db8d5e59-1fea-4844-be88-ec4adddf971c',
      issuer: 'Skillsoft via Accenture Inc.',
      issuedAt: 'July 2024',
      logo: '/logos/accenture.svg'
    },
    {
      name: 'Defensive Coding for JavaScript and HTML5',
      url: 'https://skillsoft.digitalbadges.skillsoft.com/a967296a-2b34-4fbf-986b-6ecada22dc5a',
      issuer: 'Skillsoft via Accenture Inc.',
      issuedAt: 'July 2024',
      logo: '/logos/accenture.svg'
    },
    {
      name: 'Learning Next.js',
      url: 'https://www.linkedin.com/learning/certificates/bb536673fb939f19a6e50ab3f0a9b91c548965ed5dbf9522b83630b04b0981a0',
      issuer: 'LinkedIn Learning',
      issuedAt: 'July 2023',
      logo: '/logos/linkedin.svg'
    },
    {
      name: 'React.js Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/d9f89924e0452a3934f63f8c1c4d9cb5bdee3bf3cd53158439810d140279e70a',
      issuer: 'LinkedIn Learning',
      issuedAt: 'June 2023',
      logo: '/logos/linkedin.svg'
    },
    {
      name: 'TypeScript Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/8fae98083879c65608b41d1b13c523cc7aa7a1c775cd0a3ddb066c38046987bf',
      issuer: 'LinkedIn Learning',
      issuedAt: 'June 2023',
      logo: '/logos/linkedin.svg'
    },
    {
      name: 'How to Run truly Productive Meetings - and add value',
      url: 'https://www.udemy.com/certificate/UC-7b5988a1-42fb-470e-8e7c-f3812b39962a/',
      issuer: 'Udemy',
      issuedAt: 'May 2023',
      logo: '/logos/udemy.svg'
    },
    {
      name: 'Clean Code',
      url: 'https://www.udemy.com/certificate/UC-1fc816ce-cd58-4170-8378-86f5be9986af/',
      issuer: 'Udemy',
      issuedAt: 'May 2023',
      logo: '/logos/udemy.svg'
    },
    {
      name: 'Neural Networks and Deep Learning',
      url: 'https://www.coursera.org/account/accomplishments/certificate/FV3LJR58WYT7',
      issuer: 'DeepLearning.AI',
      issuedAt: 'November 2020',
      logo: '/logos/coursera.svg'
    },
    {
      name: 'Machine Learning with Python',
      url: 'https://www.coursera.org/account/accomplishments/certificate/CRYQKRUNU4WW',
      issuer: 'IBM Skills Network',
      issuedAt: 'August 2020',
      logo: '/logos/coursera.svg'
    },
    {
      name: 'PH125.8x: Data Science: Machine Learning',
      url: 'https://courses.edx.org/certificates/dd5249b1eeb74832ab566db5b366aac8',
      issuer: 'HarvardX',
      issuedAt: 'June 2020',
      logo: '/logos/edx.svg'
    },
  ];

  return (
    <Stack>
      <Title order={2} id="certificates">My Certificates</Title>

      {
        certificateList.map((certificate, index) => {
          const isLast = index + 1 === certificateList.length;
          return (
            <div key={certificate.name}>
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