import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.types';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['listarPensamentos']);
    });
  }

  cancelar() {
    this.router.navigate(['listarPensamentos']);
  }
}
