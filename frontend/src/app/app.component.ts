import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public http:HttpClient){}
  title = 'mean-stack-crud';

  ngOnInit()
  {
    this.http.get('http://localhost:3200/lists').subscribe((listdata)=>
    {
      console.log(listdata,'liii');
    })

  }




}
