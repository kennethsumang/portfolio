import { Stack } from "@mantine/core";
import ArticlesSection from "./_sections/articles/ArticlesSection";
import CertificatesSection from "./_sections/certificates/CertificatesSection";
import HistorySection from "./_sections/history/HistorySection";
import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";
import SkillsSection from "./_sections/skills/SkillsSection";

export default function HomePage() {
  return (
    <Stack
      gap="xl"
      pb="8em"
      pt="4em"
      px={{ base: "1em", xs: "1em", sm: "2em", md: "2em", lg: "2em", xl: "3em" }}
    >
      <HomeSection />
      <SkillsSection />
      <HistorySection />
      <CertificatesSection />
      {/* <ProjectsSection />
      <ArticlesSection /> */}
    </Stack>
  );
}
