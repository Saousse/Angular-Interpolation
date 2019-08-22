import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
        Welcome {{name}}
  </h2>
  <input type="text" value="Oby">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Oby"

  constructor() { }

  ngOnInit() {
  }
}
