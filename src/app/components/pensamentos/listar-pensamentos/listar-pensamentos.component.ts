import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento.types';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((res) => {
      this.listaPensamentos = res;
    });
  }
}
