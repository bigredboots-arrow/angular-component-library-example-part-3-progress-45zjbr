import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demand',
  template: `
    <div style="padding: 1.5rem;"><h1>Manufacturing Sites Discover</h1></div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class DemandDiscoverComponent {}

export const breadCrumbConstant = `Demand > Discover`;
