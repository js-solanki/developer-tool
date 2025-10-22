import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-npm-package-checker',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './npm-package-checker.component.html',
  styleUrl: './npm-package-checker.component.scss'
})
export class NpmPackageCheckerComponent {

  query = new FormControl('');
  suggestions: any[] = [];
  selectedPackage: any = null;

  packageName = '';
  packageInfo: any = null;

  constructor(private http: HttpClient) {
    this.query.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value:any) => this.getLiveSuggestions(value))
      )
      .subscribe(results => {
        this.suggestions = results;
      });
  }

  getLiveSuggestions(input: string): Observable<any[]> {
    if (!input) return of([]);
    const encoded = encodeURIComponent(input);
    return this.http.get<any[]>(`https://api.npms.io/v2/search/suggestions?q=${encoded}`);
  }

  selectPackage(pkg: any) {
    this.selectedPackage = pkg;
  }

  async getPackageInfo() {
    if (!this.packageName.trim()) return;
    let encoded = encodeURIComponent(this.packageName.trim());
    const response = await fetch(`https://api.npms.io/v2/package/${encoded}`);
    const data = await response.json();

    this.packageInfo = {
      name: data.collected.metadata.name,
      version: data.collected.metadata.version,
      description: data.collected.metadata.description,
      lastUpdate: data.collected.metadata.date,
      dependencies: Object.keys(data.collected.metadata.dependencies || {}).length,
      downloads: data.collected.npm.downloads[0]?.count || 0,
      maintainers: data.collected.metadata.maintainers?.map((m: any) => m.username) || [],
      npmLink: data.collected.metadata.links?.npm,
    };
  }
}
