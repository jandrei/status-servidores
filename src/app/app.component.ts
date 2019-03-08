import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'status-servidores';
  servidores: Servidor[];
  envs: [];
  grupo = {};
  sistemas = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/servidores.json').subscribe(data => {
      this.servidores = data['servers'];
      this.envs = data['envs'];

      this.updateRowGroupMetaData();
    });
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    if (this.servidores) {
      for (let i = 0; i < this.servidores.length; i++) {
        const servidor = this.servidores[i];

        if (!this.grupo[servidor.sistema + '-' + servidor.env]) {
          this.grupo[servidor.sistema + '-' + servidor.env] = [];
        }
        this.grupo[servidor.sistema + '-' + servidor.env].push(servidor);

        if (this.sistemas.indexOf(servidor.sistema) < 0) {
          this.sistemas.push(servidor.sistema);
        }
      }
    }
  }
}

export class Servidor {
  sistema: string;
  env: string;
  artefatos: any[];
}
