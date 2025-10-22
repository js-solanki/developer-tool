import { Routes } from '@angular/router';
import { JsonEnvConverterComponent } from './tools/json-env-converter.component';
import { JwtDecoderComponent } from './tools/jwt-decoder.component';
import { HomeComponent } from './home/home.component';
import { RandomJsonComponent } from './tools/random-json.component';
import { RegexExplainerComponent } from './tools/regex-explainer.component';
import { SlugifyTextComponent } from './tools/slugify-text.component';
import { ApiRequestComposerComponent } from './tools/api-request-composer.component';
import { CommitMessageHelperComponent } from './tools/commit-message-helper.component';
import { NpmPackageCheckerComponent } from './tools/npm-package-checker.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'json-env', component: JsonEnvConverterComponent },
  { path: 'jwt-decoder', component: JwtDecoderComponent },
  { path: 'random-json', component: RandomJsonComponent },
  { path: 'regex-explainer', component: RegexExplainerComponent },
  { path: 'slugify', component: SlugifyTextComponent },
  { path: 'api-tester', component: ApiRequestComposerComponent },
  { path: 'commit-helper', component: CommitMessageHelperComponent },
   { path: 'npm', component: NpmPackageCheckerComponent },
  

];
