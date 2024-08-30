import ArticlesSection from "./_sections/articles/ArticlesSection";
import CertificatesSection from "./_sections/certificates/CertificatesSection";
import HistorySection from "./_sections/history/HistorySection";
import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";
import SkillsSection from "./_sections/skills/SkillsSection";

export default function HomePage() {
  return (
    <div>
      <HomeSection />
      <SkillsSection />
      <HistorySection />
      <CertificatesSection />
      <ProjectsSection />
      <ArticlesSection />
    </div>
  );
}
