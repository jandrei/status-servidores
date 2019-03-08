import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input() war: any;

  
  color = 'w';//w,s,e

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!this.war || !this.war.url) {
      this.color = 'b';
      return;
    }

    this.http.get(this.war.url).subscribe(
      suc => this.color = 's',
      err => this.color = 'e'
    );
  }

}
