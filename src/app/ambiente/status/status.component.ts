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
  retornoPing = "Ping em andamento.";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!this.war || !this.war.url) {
      this.color = '';
      return;
    }

    this.http.get(this.war.url, { responseType: 'text' }).subscribe(
      suc => {
        this.color = 's';
        this.retornoPing = this.war.url + "<br>" + JSON.stringify(suc);
      },
      err => {
        this.retornoPing = this.war.url + "<br>" + JSON.stringify(err);
        console.log(this.war.url)
        console.log(err)
        if (err.status && (err.status !== 0 || new String(err.id).indexOf('NotFoundException') >= 0)) {
          this.color = 's';
        } else {
          this.color = 'e';
        }
      }
    );

  }

  submitData(url, callback) {
    /* the AJAX request... */
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        callback(xhr)
      }
    };
    xhr.onerror = function (e) {
      callback(xhr)
    };

    xhr.send(null);
  }

}
