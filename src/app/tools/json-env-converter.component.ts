import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-env-converter',
  imports: [FormsModule, CommonModule],
  templateUrl: './json-env-converter.component.html',
  styleUrl: './json-env-converter.component.scss'
})
export class JsonEnvConverterComponent {

  input = '';
  output = '';
  mode: 'json-to-env' | 'env-to-json' = 'json-to-env';

  convert() {
    try {
      if (this.mode === 'json-to-env') {
        const parsed = JSON.parse(this.input);
        this.output = Object.entries(parsed)
          .map(([key, value]) => `${key}=${value}`)
          .join('\n');
      } else {
        const lines = this.input.split('\n');
        const obj: Record<string, string> = {};
        lines.forEach((line) => {
          const [key, ...rest] = line.split('=');
          if (key) obj[key.trim()] = rest.join('=').trim();
        });
        this.output = JSON.stringify(obj, null, 2);
      }
    } catch (e) {
      this.output = '⚠️ Invalid input format!';
    }
  }
}
