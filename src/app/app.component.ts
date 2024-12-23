import { Component, HostListener } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CommonModule } from '@angular/common';

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

  /**
   * Listens for the scroll event and determines the active section and visibility of the Go to Top button.
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('div[id]');
    const scrollPosition = window.pageYOffset;
    let currentSection: string = '';

    sections.forEach((section: Element) => {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust for navbar height
      if (scrollPosition >= offsetTop) {
        currentSection = section.id;
      }
    });

    this.activeSection = currentSection;

    // Show the Go to Top button if scrolled more than 300px
    this.showGoToTop = scrollPosition > 300;
  }

  /**
   * Smoothly scrolls to the specified section.
   * @param sectionId The id of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  /**
   * Smoothly scrolls to the top of the page.
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
