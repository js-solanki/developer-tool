import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random-json',
  imports: [CommonModule, FormsModule],
  templateUrl: './random-json.component.html',
  styleUrl: './random-json.component.scss'
})
export class RandomJsonComponent {

  fields = [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'string' }
  ];
  quantity = 1;
  generatedJSON = '';

  addField() {
    this.fields.push({ name: '', type: 'string' });
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  generateJSON() {
    const results = [];

    for (let i = 0; i < this.quantity; i++) {
      const obj: any = {};
      this.fields.forEach(field => {
        const value = this.generateValue(field.type);
        obj[field.name] = value;
      });
      results.push(obj);
    }

    this.generatedJSON = JSON.stringify(results, null, 2);
  }

  generateValue(type: string): any {
    switch (type) {
      case 'string':
        return this.randomString();
      case 'number':
        return Math.floor(Math.random() * 1000);
      case 'boolean':
        return Math.random() > 0.5;
      case 'date':
        return new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();
      default:
        return null;
    }
  }

  randomString(length: number = 8): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedJSON).then(() => {
      alert('Copied to clipboard!');
    });
  }

  downloadJSON() {
    const blob = new Blob([this.generatedJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'random-data.json';
    anchor.click();

    URL.revokeObjectURL(url);
  }
}
