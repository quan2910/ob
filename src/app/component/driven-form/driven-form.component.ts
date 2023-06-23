import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit{
  public name = '';
  ngOnInit(): void {
  }
  public submitForm() {
    console.log('smForm' + this.name)
  }
}
