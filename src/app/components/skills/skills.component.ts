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
    // Programming
    { name: 'Python', level: 90, icon: 'fab fa-python', category: 'Programming' },
    { name: 'SQL', level: 85, icon: 'fas fa-database', category: 'Programming' },
    { name: 'Java', level: 80, icon: 'fab fa-java', category: 'Programming' },
    { name: 'TypeScript', level: 75, icon: 'fab fa-js-square', category: 'Programming' },

    // Cloud
    { name: 'Azure', level: 75, icon: 'fab fa-microsoft', category: 'Cloud' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws', category: 'Cloud' },
    { name: 'Google Cloud', level: 65, icon: 'fab fa-google', category: 'Cloud' },

    // Analytics
    { name: 'Power BI', level: 85, icon: 'fas fa-chart-line', category: 'Analytics' },
    { name: 'Tableau', level: 70, icon: 'fas fa-table', category: 'Analytics' },
    { name: 'Excel', level: 80, icon: 'fas fa-file-excel', category: 'Analytics' },

    // Development Tools
    { name: 'Docker', level: 75, icon: 'fab fa-docker', category: 'Development Tools' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt', category: 'Development Tools' },
    { name: 'JIRA', level: 80, icon: 'fas fa-tasks', category: 'Development Tools' },

    // Machine Learning & AI
    { name: 'TensorFlow', level: 70, icon: 'fas fa-brain', category: 'Machine Learning & AI' },
    { name: 'Scikit-Learn', level: 80, icon: 'fas fa-robot', category: 'Machine Learning & AI' },
    { name: 'Keras', level: 75, icon: 'fas fa-microchip', category: 'Machine Learning & AI' },
    { name: 'PyTorch', level: 70, icon: 'fas fa-brain', category: 'Machine Learning & AI' },

    // Others
    { name: 'HTML & CSS', level: 95, icon: 'fab fa-html5', category: 'Others' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', category: 'Others' },
    { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap', category: 'Others' },
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
