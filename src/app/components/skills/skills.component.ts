import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('filterAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.3s ease-in'),
      ]),
      transition('* => void', [
        animate('0.3s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SkillsComponent {
  selectedCategory: string = 'All';

  skills = [
    // Programming (4)
    { name: 'Python', level: 90, icon: 'fab fa-python', category: 'Programming' },
    { name: 'SQL', level: 85, icon: 'fas fa-database', category: 'Programming' },
    { name: 'Java', level: 80, icon: 'fab fa-java', category: 'Programming' },
    { name: 'MongoDB', level: 50, icon: 'fas fa-leaf', category: 'Programming' },

    // Cloud (4)
    { name: 'Azure', level: 75, icon: 'fab fa-microsoft', category: 'Cloud' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws', category: 'Cloud' },
    { name: 'Google Cloud', level: 65, icon: 'fab fa-google', category: 'Cloud' },
    { name: 'IBM Cloud', level: 60, icon: 'fas fa-cloud', category: 'Cloud' },

    // Analytics (8)
    { name: 'Power BI', level: 85, icon: 'fas fa-chart-line', category: 'Analytics' },
    { name: 'Tableau', level: 70, icon: 'fas fa-table', category: 'Analytics' },
    { name: 'Excel', level: 80, icon: 'fas fa-file-excel', category: 'Analytics' },
    { name: 'Snowflake', level: 82, icon: 'fas fa-snowflake', category: 'Analytics' },
    { name: 'ETL Pipelines', level: 75, icon: 'fas fa-sync', category: 'Analytics' },
    { name: 'Data Modeling', level: 80, icon: 'fas fa-project-diagram', category: 'Analytics' },
    { name: 'Data Warehouse', level: 85, icon: 'fas fa-database', category: 'Analytics' },
    { name: 'VLOOKUP', level: 70, icon: 'fas fa-search', category: 'Analytics' },

    // Development Tools (4)
    { name: 'Docker', level: 75, icon: 'fab fa-docker', category: 'Development Tools' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt', category: 'Development Tools' },
    { name: 'JIRA', level: 80, icon: 'fas fa-tasks', category: 'Development Tools' },
    { name: 'Jupyter', level: 75, icon: 'fas fa-book', category: 'Development Tools' },

    // Machine Learning & AI (8)
    { name: 'TensorFlow', level: 70, icon: 'fas fa-brain', category: 'Machine Learning & AI' },
    { name: 'Scikit-Learn', level: 80, icon: 'fas fa-robot', category: 'Machine Learning & AI' },
    { name: 'Keras', level: 75, icon: 'fas fa-microchip', category: 'Machine Learning & AI' },
    { name: 'PyTorch', level: 70, icon: 'fas fa-brain', category: 'Machine Learning & AI' },
    { name: 'NumPy', level: 85, icon: 'fas fa-chart-bar', category: 'Machine Learning & AI' },
    { name: 'Pandas', level: 90, icon: 'fas fa-table', category: 'Machine Learning & AI' },
    { name: 'Matplotlib', level: 80, icon: 'fas fa-chart-pie', category: 'Machine Learning & AI' },
    { name: 'Seaborn', level: 75, icon: 'fas fa-chart-line', category: 'Machine Learning & AI' },
  ];

  filteredSkills = this.skills;

  filterSkills(category: string): void {
    this.selectedCategory = category;
    this.filteredSkills =
      category === 'All'
        ? this.skills
        : this.skills.filter((skill) => skill.category === category);
  }
}
