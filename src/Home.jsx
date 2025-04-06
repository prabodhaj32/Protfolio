import React from 'react';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import FooterMain from './components/footer/FooterMain';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import Education from './components/education/Education';

const Home = () => {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <Education/>
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
};

export default Home;
