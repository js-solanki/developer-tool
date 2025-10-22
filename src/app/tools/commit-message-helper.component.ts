import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-commit-message-helper',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './commit-message-helper.component.html',
  styleUrl: './commit-message-helper.component.scss'
})
export class CommitMessageHelperComponent {

   commitForm: FormGroup;
  messagePreview = '';
  isValid = true;
  activeMode: 'manual' | 'ai' = 'manual';

  types = [
    'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'
  ];

  aiInput = '';
  aiOutput = '';
  loading = false;

  constructor(private fb: FormBuilder) {
    this.commitForm = this.fb.group({
      type: ['', Validators.required],
      scope: [''],
      description: ['', [Validators.required, Validators.maxLength(72)]],
      body: [''],
      footer: ['']
    });
  }

  generateCommitMessage(): void {
    if (this.commitForm.invalid) {
      this.isValid = false;
      this.messagePreview = '';
      return;
    }

    const { type, scope, description, body, footer } = this.commitForm.value;
    const scopePart = scope ? `(${scope})` : '';
    const header = `${type}${scopePart}: ${description}`;
    const parts = [header];

    if (body) parts.push(body);
    if (footer) parts.push(footer);

    this.messagePreview = parts.join('\n\n');
    this.isValid = true;
  }

  async generateCommitWithAI(): Promise<void> {
    if (!this.aiInput.trim()) return;
    this.loading = true;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mistral',
          messages: [
            { role: 'system', content: 'Generate a conventional commit message from the diff. Use feat:, fix:, etc.' },
            { role: 'user', content: this.aiInput }
          ]
        })
      });

      const data = await response.json();
      this.aiOutput = data.choices?.[0]?.message?.content || 'Unable to generate commit message.';
    } catch (error) {
      this.aiOutput = 'Error generating message.';
    } finally {
      this.loading = false;
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }

  switchMode(mode: 'manual' | 'ai') {
    this.activeMode = mode;
  }
}
