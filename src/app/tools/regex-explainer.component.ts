import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regex-explainer',
  imports: [CommonModule,FormsModule],
  templateUrl: './regex-explainer.component.html',
  styleUrl: './regex-explainer.component.scss'
})
export class RegexExplainerComponent {

   regexPattern: string = '';
  testString: string = '';
  isValid: boolean = false;
  explanation: string = '';
  matches: string[] = [];
  highlightedText: string = '';
  selectedPattern: string = '';

  commonPatterns: { label: string, pattern: string }[] = [
    { label: 'Email Address', pattern: '^\\S+@\\S+\\.\\S+$' },
    { label: 'Phone Number', pattern: '^\\+?[0-9]{10,15}$' },
    { label: 'URL', pattern: '^(https?:\\/\\/)?([\\w\\d\\-]+)\\.([a-z\\.]{2,6})([\\/\\w\\d\\.-]*)*\\/?$' },
    { label: 'IPv4 Address', pattern: '^(\\d{1,3}\\.){3}\\d{1,3}$' },
    { label: 'Password Strength (Min 8 char, 1 letter, 1 number)', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$' },
    { label: 'Only Digits', pattern: '^\\d+$' },
    { label: 'Only Letters (case insensitive)', pattern: '^[a-zA-Z]+$' }
  ];

  onPatternSelect() {
    this.regexPattern = this.selectedPattern;
    this.validateRegex();
    this.getExplanation();
  }

  validateRegex(): void {
    try {
      const regex = new RegExp(this.regexPattern);
      this.isValid = regex.test(this.testString);
      this.matches = this.testString.match(regex) || [];
      this.highlightedText = this.highlightMatches(regex);
    } catch (error) {
      this.isValid = false;
      this.matches = [];
      this.highlightedText = this.testString;
    }
  }

  getExplanation(): void {
    if (!this.regexPattern.trim()) {
      this.explanation = '';
      return;
    }

    try {
      const pattern = this.regexPattern;
      const parts = pattern.match(/(\\.|\\d|\\w|\\s|\\b|\[.*?\]|\(.*?\)|\{\d+(,\d*)?\}|\^|\$|\.|\+|\*|\?|\||[^\s])/g) || [];
      this.explanation = parts.map(part => {
        switch (part) {
          case '^': return `^ : Start of string`;
          case '$': return `$ : End of string`;
          case '.': return `. : Any character except newline`;
          case '\\d': return `\\d : Digit (0-9)`;
          case '\\w': return `\\w : Word character (a-z, A-Z, 0-9, _)`;
          case '\\s': return `\\s : Whitespace character`;
          case '\\b': return `\\b : Word boundary`;
          case '+': return `+ : One or more occurrences`;
          case '*': return `* : Zero or more occurrences`;
          case '?': return `? : Zero or one occurrence`;
          case '|': return `| : OR operator`;
          case '\\.': return `\\. : Literal dot`;
          default:
            if (part.startsWith('[')) return `${part} : Character set`;
            if (part.startsWith('{')) return `${part} : Quantifier`;
            return `${part} : Literal or unknown token`;
        }
      }).join('\n');

       
    } catch (err) {
      this.explanation = 'Error generating explanation.';
    }
  }

  highlightMatches(regex: RegExp): string {
    if (!this.testString || !this.regexPattern.trim()) return this.testString;
    try {
      const globalRegex = new RegExp(regex.source, 'g');
      return this.testString.replace(globalRegex, match => `<mark>${match}</mark>`);
    } catch {
      return this.testString;
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
