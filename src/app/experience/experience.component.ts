import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {

  events: EventItem[];

  constructor() {
      this.events = [
          { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
          { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
          { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
      ];
    
    
  }
  
  experience_one = {
    job: 'Freelance Web Developer',
    skills: 'Angular, React, Javascript, Typescript',
    date: 'June 2023 - Sept 2024',
    icon: 'pi pi-check',
    description: [
      'Translated client requirements into responsive, SEO-optimized web applications using Angular and React, delivering high-quality, interactive, and visually appealing designs.',
      'Built dynamic user interfaces with reusable components, reducing development time and ensuring consistency across pages.',
      'Integrated third-party APIs and tools to enhance website functionality, such as analytics, payment gateways, or content management features.',
      'Conducted rigorous testing and debugging processes, identifying and resolving performance issues to improve load times and user experience.',
      'Collaborated with designers and clients to achieve cohesive layouts, provided training and technical support to enable clients to manage content independently, and followed up with maintenance services for ongoing performance optimization.'
    ]
  }

  experience_two = {
    job: 'Business Data Analyst & Developer',
    Company: 'PBM - CVS Health, Buffalo Grove, IL',
    skills: 'Python, SQL, Pandas, Tkinter, Access, Excel',
    date: 'Oct 2023 - Current',
    icon: 'pi pi-check',
    color: '#FF9800',
    description: [
      'Developed SQL queries to pull and compile data from multiple databases and tables, producing actionable reports and analytics for strategic decision-making.',
      'Leveraged Python (Tkinter, Pandas) to create data analysis tools that automated repetitive tasks, increasing efficiency and accuracy in data processing.',
      'Built and maintained Microsoft Access databases to manage formulary data, ensuring data integrity and ease of access for pharmacy teams.',
      'Presented complex data findings to stakeholders through visual reports and dashboards, facilitating data-driven decision-making across departments.',
      'Ensured strict compliance with pharmaceutical regulations and industry standards, regularly auditing data and workflows to maintain alignment with internal policies.',
    ]
  }

  public experiences = [
    this.experience_one,
    this.experience_two
  ]

  

}
