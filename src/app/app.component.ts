import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private people = [];
  private families = [];
  ngOnInit(){
    fetch("https://my-json-server.typicode.com/ajd01/demo/memebers")
    .then(response => {
      return response.json();
    })
    .then(people => {
      this.people = people;
      return fetch("https://my-json-server.typicode.com/ajd01/demo/families");
    })
    .then(response => {
      return response.json();
    })
    .then(families => {
      this.families = families;
      console.log(this.families, this.people);
    })
    .catch(err => {
      console.log(err);
    });
  }

  membersOf(family){
    return this.people.filter(p => family.memebersIds.indexOf(p.id) > -1);
  }
}
