import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{pageTitle}}</h1>`,
})
export class AppComponent
{
  pageTitle: string = "Mangalam Palace";
}
