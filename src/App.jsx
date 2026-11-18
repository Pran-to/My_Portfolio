import React, { useState, Suspense, lazy } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useProjectsStore } from './hooks/useProjectsStore';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import KineticBanner from './components/ui/KineticBanner';
import ProjectUploadModal from './components/ui/ProjectUploadModal';
import ProjectDetailModal from './components/ui/ProjectDetailModal';
import ResumeModal from './components/ui/ResumeModal';
import OwnerAuthModal from './components/ui/OwnerAuthModal';

const PortfolioScene = lazy(() => import('./components/canvas/PortfolioScene'));

export default function App() {
  const { progress, activeSection } = useScrollProgress();
  const {
    projects,
    isOwnerUnlocked,
    verifyOwnerPin,
    lockOwnerStudio,
    addProject,
    deleteProject,
    resetToDefault,
    exportProjectsJson,
  } = useProjectsStore();

  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleRequestOwnerAction = () => {
    if (isOwnerUnlocked) {
      setIsUploadOpen(true);
    } else {
      setIsOwnerModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30">
      {/* 3D Scroll-Driven WebGL & Aurora Background */}
      <Suspense fallback={null}>
        <PortfolioScene scrollProgress={progress} />
      </Suspense>

      {/* Fixed Navigation & Scroll Progress */}
      <Navbar
        activeSection={activeSection}
        scrollProgress={progress}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Dual-Track Kinetic Text Animation Banner */}
        <KineticBanner />

        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          projects={projects}
          isOwnerUnlocked={isOwnerUnlocked}
          onRequestOwnerAction={handleRequestOwnerAction}
          onLockOwner={lockOwnerStudio}
          onSelectProject={(project) => setSelectedProject(project)}
          onDeleteProject={deleteProject}
          onExportJson={exportProjectsJson}
          onResetProjects={resetToDefault}
        />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Owner Verification Modal */}
      <OwnerAuthModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        onVerifyPin={verifyOwnerPin}
        onSuccessUnlock={() => setIsUploadOpen(true)}
      />

      {/* Owner Project Upload Modal */}
      <ProjectUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddProject={addProject}
      />

      {/* Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
