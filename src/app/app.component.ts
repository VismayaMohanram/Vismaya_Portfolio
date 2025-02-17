import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeSection: string = '';
  showGoToTop: boolean = false;
  menuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('div[id]');
    const scrollPosition = window.pageYOffset;
    let currentSection: string = '';

    sections.forEach((section: Element) => {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 100;
      if (scrollPosition >= offsetTop) {
        currentSection = section.id;
      }
    });

    this.activeSection = currentSection;
    this.showGoToTop = scrollPosition > 300;
  }

  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
