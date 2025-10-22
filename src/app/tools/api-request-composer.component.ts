import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-request-composer',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './api-request-composer.component.html',
  styleUrl: './api-request-composer.component.scss'
})
export class ApiRequestComposerComponent {

  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  method = 'GET';
  url = '';
  headersText = `{
  "Content-Type": "application/json"
}`;
  bodyText = `{
  "example": "value"
}`;
  response: string = '';
  isLoading = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  sendRequest() {
    this.isLoading = true;
    this.response = '';
    this.error = '';

    let headers = new HttpHeaders();

    try {
      const parsedHeaders = JSON.parse(this.headersText || '{}');
      Object.entries(parsedHeaders).forEach(([key, value]) => {
        headers = headers.set(key, value as string);
      });
    } catch (e) {
      this.error = 'Invalid header JSON';
      this.isLoading = false;
      return;
    }

    let body = {};
    try {
      if (this.bodyText?.trim()) {
        body = JSON.parse(this.bodyText);
      }
    } catch (e) {
      this.error = 'Invalid body JSON';
      this.isLoading = false;
      return;
    }

    const options = { headers };

    const request$ = {
      GET: this.http.get(this.url, options),
      POST: this.http.post(this.url, body, options),
      PUT: this.http.put(this.url, body, options),
      DELETE: this.http.delete(this.url, options)
    }[this.method];

    request$?.subscribe({
      next: (res:any) => {
        this.response = JSON.stringify(res, null, 2);
        this.isLoading = false;
      },
      error: (err:any) => {
        this.error = JSON.stringify(err.error || err.message, null, 2);
        this.isLoading = false;
      }
    });
  }

  copyResponse() {
    navigator.clipboard.writeText(this.response || '').then(() =>
      alert('Response copied to clipboard!')
    );
  }
}
