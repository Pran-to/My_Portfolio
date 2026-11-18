import { useState, useEffect, useCallback } from 'react';
import { INITIAL_PROJECTS } from '../data/portfolioData';

const STORAGE_KEY = 'pranto_portfolio_projects_v1';
const OWNER_SESSION_KEY = 'pranto_portfolio_owner_unlocked_v1';

export function useProjectsStore() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Failed to parse saved projects:', err);
    }
    return INITIAL_PROJECTS;
  });

  const [isOwnerUnlocked, setIsOwnerUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(OWNER_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {
      console.warn('Failed to persist projects:', err);
    }
  }, [projects]);

  const verifyOwnerPin = useCallback((pin) => {
    const expectedPin = import.meta.env.VITE_ADMIN_PIN || 'pranto2026';
    if (pin.trim() === expectedPin) {
      setIsOwnerUnlocked(true);
      try {
        sessionStorage.setItem(OWNER_SESSION_KEY, 'true');
      } catch {
        // ignore storage errors
      }
      return true;
    }
    return false;
  }, []);

  const lockOwnerStudio = useCallback(() => {
    setIsOwnerUnlocked(false);
    try {
      sessionStorage.removeItem(OWNER_SESSION_KEY);
    } catch {
      // ignore storage errors
    }
  }, []);

  const addProject = useCallback(
    (newProject) => {
      if (!isOwnerUnlocked) return null;
      const projectWithMeta = {
        ...newProject,
        id: `custom-${Date.now()}`,
        isCustom: true,
        featured: true,
        gradient:
          newProject.gradient ||
          'from-cyan-500/20 via-indigo-600/20 to-purple-900/40',
        accentColor: newProject.accentColor || '#38bdf8',
      };
      setProjects((prev) => [projectWithMeta, ...prev]);
      return projectWithMeta;
    },
    [isOwnerUnlocked]
  );

  const deleteProject = useCallback(
    (id) => {
      if (!isOwnerUnlocked) return;
      setProjects((prev) => prev.filter((p) => p.id !== id));
    },
    [isOwnerUnlocked]
  );

  const resetToDefault = useCallback(() => {
    if (!isOwnerUnlocked) return;
    setProjects(INITIAL_PROJECTS);
    localStorage.removeItem(STORAGE_KEY);
  }, [isOwnerUnlocked]);

  const exportProjectsJson = useCallback(() => {
    const dataStr = JSON.stringify(projects, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pranto-portfolio-projects.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [projects]);

  return {
    projects,
    isOwnerUnlocked,
    verifyOwnerPin,
    lockOwnerStudio,
    addProject,
    deleteProject,
    resetToDefault,
    exportProjectsJson,
  };
}
