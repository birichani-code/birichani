import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'User Registration',
      desc: '',
      githuburl: 'https://github.com/birichani-code/UserRegistration',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular-9 frontend, Bootstrap, H2, Spring Boot, Postman.'
    },

    {
      id: 2,
      title: 'Bookstore APP',
      desc: '',
      livedemo: '',
      githuburl: 'https://github.com/birichani-code/bookstore',
      imgUrl: 'assets/images/b1.png',
      tech: 'Spring Boot, Javascript, MYSQL, Thymeleaf'
    },

    {
      id: 3,
      title: 'Testing REST API',
      desc: '',
      githuburl: 'https://github.com/birichani-code/Testing-Rest-API',

      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery, Swagger, Spring Security, Postman, JUNIT5'
    },

  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Java, Javascript, Jquery, Bootstrap, H2 and MYSQL`

  about = "Lover of innovation technology, software innovations and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/10BncjsTWYWF91LuNF7Pn-b8h8nN844w-/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,H2, MONGODB, ',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'SPRING BOOT,JAVA',
      'progress': '90%'
    },
    {
      'id': '7',
      'skill': 'HIBERNATE, MAVEN, GRADLE',
      'progress': '87%'
    },
    {
      'id': '8',
      'skill': 'REST API,JAVASCRIPT ',
      'progress': '80%'
    },
    {
        'id': '9',
          'skill': 'SPRING MICROSERVICES, SPRING CLOUD ',
          'progress': '60%'
     },
     {
             'id': '10',
               'skill': 'GIT, DATABASE ENGINEERING ',
               'progress': '70%'
          }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Business Information Technology.',
      'info': `The institution aims at Information technology, software engineering and business environment .
With much enthusiasm, character, passion , grit and confidence got skills and expertise on Software development and Web development.`,
      'institution': 'JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY., Nairobi, Kenya.'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2017',
      'education': 'HIGH SCHOOL',
      'stream': 'KCSE',
      'institution': 'SALIENT HIGH SCHOOL,NYANDARUA',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry langauges and discpline.
Completed my high school with a good grade that enhanced my chance to join JKUAT.`
    },
    {
      'id': '3',
      'from_to_year': '2004 - 2012',
      'education': 'Primary  School',
      'stream': 'KCPE',
      'institution': 'MATURA PRIMARY SCHOOL',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with good grade and joined Passenga before Salient.`
    }
  ];
  exprienceData: any = [
   {
    id: 4,
     company: 'Black Mental Health Matters, Kenya',
     location: 'Nairobi, Kenya',
     timeline: 'March 2023 -  To Date',
     role: 'Back End Developer',
     work: `Technologies : Agile, Node JS,Spring Boot,Javascript, Java.
     Responsibilities
   Writing clean, scalable & efficient code
        Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for
        improvement.
        Developing ideas for new programs, products, or features by monitoring industry developments
        and trends.
        Participating in continuing education and training to remain current on best practices, learn new
        programming languages, and better assist other team members.
        Taking lead on projects, as needed.
        Integration of user-facing elements developed by front-end developers with server-side logic
        Building reusable code libraries for future use
        Designing and implementing RESTful APIs
        Optimizing the performance of applications for full-scale production deployments
        Providing code documentation and other inputs to technical documents
        Participating in code reviews
        Troubleshooting and debugging to optimize performance`
      },

    {
      id: 3,
      company: 'Geeks for Geeks, Kenya',
      location: 'JKUAT,Nairobi, Kenya',
      timeline: 'Nov 2021 to May 2022',
      role: 'Ass Chapter Lead',
      work: `Technologies : Geeks for Geeks Website:,Angular , Node JS, .
      Responsible for overseeing the activities and progress of various departments such as marketing and
PR outreach, design and branding and events department. Making important decisions together with the chairperson for the society
Responsibility of keeping track of all meetings and events.
Responsible for overseeing the activities and progress of various departments such as marketing and
PR outreach, design and branding and events department.
Making important decisions together with the chairperson for the society
Responsibility of keeping track of all meetings and events..`
    },

    {
      id: 2,
      company: 'Geeks For Geeks, Kenya',
      location: 'JKUAT, Nairobi,Kenya.',
      timeline: 'Aug 2021 to Oct 2021',
      role: 'Technical Lead: Frontend  Developer',
      work: `Geeks for Geeks Website: Angular , Node JS , MYSQL .
  Helping the society in tech related events
Focused on building a website for the Geeks for Geeks student’s chapter where sharing all the
scheduled events, facts, articles were done.
Entitled in spreading the technical knowledge to the juniors (students and other departments)
regarding technical stuffs.
  `
    },

    {
      id: 1,
      company: 'KALRO',
      location: 'Muranga,Kenya.',
      timeline: 'June 2021 - Aug 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies :Java, Spring Boot , SQL .

  Project 1 : Worked on uploading two excelsheets with bulk of data and finding the matchesfor each
business
Project 2 : Worked on indexing the search resultsinside the application with bulk of data and
configuring the server with cron jobs and shell scripts
Worked on ranking the search results based on various criteria, features and delivering the accurate
results based on generated scores.
Maintenance of computer networking services in telecommunication that include domain server,
mail server, internet network access and telephone communication
  `
    },


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
