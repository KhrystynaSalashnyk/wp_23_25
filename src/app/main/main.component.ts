import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from '../components/skills/skills.component';
import { HobbiesComponent } from '../components/hobbies/hobbies.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HobbiesComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public Education: any[] = [
    {
      data: '2011 - 2013',
      name: 'MASTER DEGREE',
      university: 'Stanford University',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      data: '2007 - 2010',
      name: 'BACHELOR DEGREE',
      university: 'Chicago University',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
  ]

  public JobExperience: any[] = [
    {
      period: '2018 - Present',
      position: 'Web Designer',
      company: 'Awesome Company Inc.',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      period: '2015 - 2018',
      position: 'Graphic Designer',
      company: 'DesignPro',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  public References: any[] = [
    {
      name: 'DARWIN B. MAGANA',
      address: '2813 Shobe Lane Mancos, CO.',
      phone: '+1-970-533-3393',
      email: 'www.yourwebsite.com'
    },
    {
      name: 'TRAVIS M. GODINEZ',
      address: '2755 Oakmont Dr, Chicago, IL 60605',
      phone: '+1-312-555-1245',
      email: 'travis@example.com'
    }
  ];

  public Contact = {
    phone: '+4-756-822-5156',
    website: 'www.yourwebsite.com',
    email: 'yourinfo@email.com',
    address: '1173 Valley Street, Camden, NJ 08102'
  };
}
