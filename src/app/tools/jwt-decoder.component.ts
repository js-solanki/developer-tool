import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jwt-decoder',
  imports: [FormsModule, CommonModule],
  templateUrl: './jwt-decoder.component.html',
  styleUrl: './jwt-decoder.component.scss'
})
export class JwtDecoderComponent {

   token = '';
  header: string = '';
  payload: string = '';
  error: string = '';

  decodeJWT() {
    this.header = '';
    this.payload = '';
    this.error = '';

    try {
      const parts = this.token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const decode = (str: string) =>
        decodeURIComponent(
          atob(str)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );

      this.header = JSON.stringify(JSON.parse(decode(parts[0])), null, 2);
      this.payload = JSON.stringify(JSON.parse(decode(parts[1])), null, 2);
    } catch (e: any) {
      this.error = '⚠️ Failed to decode JWT: ' + e.message;
    }
  }
}
