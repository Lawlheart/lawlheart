import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  projectFilter: string = 'all';
  projects;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

  filterSkills(skill): void {
    this.projectFilter = skill;
  }

}
