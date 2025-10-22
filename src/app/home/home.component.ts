import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

   tools = [
    {
      name: 'JSON ⇄ ENV Converter',
      route: '/json-env',
      icon: '🔁',
      description: 'Convert JSON into .env format and vice versa',
    },
    {
      name: 'Regex Explainer',
      route: '/regex-explainer',
      icon: '🧪',
      description: 'Visual breakdown of regular expressions',
    },
    {
      name: 'Slugify Text',
      route: '/slugify',
      icon: '🔡',
      description: 'Convert sentence into URL-safe slugs',
    },
    {
      name: 'API Request Composer',
      route: '/api-tester',
      icon: '⚙️',
      description: 'Lightweight REST API tester',
    },
    {
      name: 'Random JSON Generator',
      route: '/random-json',
      icon: '🎲',
      description: 'Generate dummy JSON using schema',
    },
    {
      name: 'JWT Decoder',
      route: '/jwt-decoder',
      icon: '🔒',
      description: 'Decode JWT tokens (header + payload)',
    },
     {
      name: 'Commit Message Helper',
      route: '/commit-helper',
      icon: '💬',
      description: 'Generate conventional commit messages',
    },
     {
      name: 'Npm Package Checker',
      route: '/npm',
      icon: '💬',
      description: 'Check and provide detail',
    },
  ];
}
