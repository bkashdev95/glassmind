import React from 'react';
import { projects } from '../data';
import { ProfileHeader, Projects } from '../widgets';

export default function ProfileProjects() {
  return (
    <div className="main-content">
      <ProfileHeader />
      <Projects projects={projects} />
    </div>
  );
}
