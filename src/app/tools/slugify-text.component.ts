import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slugify-text',
  imports: [CommonModule,FormsModule],
  templateUrl: './slugify-text.component.html',
  styleUrl: './slugify-text.component.scss'
})
export class SlugifyTextComponent {

   inputText: string = '';
  slug: string = '';

  generateSlug() {
    this.slug = this.slugify(this.inputText);
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-')        // collapse whitespace and replace by -
      .replace(/-+/g, '-');        // collapse dashes
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.slug).then(() => {
      alert('Slug copied to clipboard!');
    });
  }
}
