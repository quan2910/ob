import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpServiceService} from "../../service/http-service.service";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  constructor(private httpServer: HttpServiceService) {

  }

  ngOnInit(): void {
    this.httpServer.getComments().subscribe(data => {
      console.log('data', data)
    })
  }

}
