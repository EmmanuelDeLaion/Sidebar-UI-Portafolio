import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myElementScript: HTMLScriptElement;
  title = 'DASHBOARD-UI';

  constructor(){
    this.myElementScript = document.createElement("script");
    this.myElementScript.src = "/assets/js/dashboard-home.js";
    document.body.appendChild(this.myElementScript);
  }

  ngOnInit(): void {

  }


}
