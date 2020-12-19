import { Injectable } from '@angular/core';
import data from '../../config/data';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

@Injectable()
export class PortfolioService {
  projects;
  experience;
  education;
  skills;
  logs;
  snippets;

  constructor() {
    this.projects = data.projects;
    this.skills = data.skills;
    this.experience = data.experience;
    this.education = data.education;
    this.logs = data.logs;
    this.snippets = data.snippets;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getExperience() {
    return this.experience;
  }

  getEducation() {
    return this.education;
  }

  getLogs() {
    return this.logs;
  }

  getSnippets() {
    return this.snippets;
  }
}
