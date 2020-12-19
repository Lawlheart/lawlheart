import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PortfolioService } from '../../services';

@Component({
  selector: 'skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  @Input() currentSkill: string;
  @Output() skillFilterEvent = new EventEmitter();

  projects;
  skills;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.skills = this.portfolioService.getSkills();
  }

  skillFilter(skill): void {
    this.skillFilterEvent.emit(skill);
  }

}
