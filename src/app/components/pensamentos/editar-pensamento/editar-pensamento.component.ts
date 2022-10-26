import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pensamento } from '../pensamento.types';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    modelo: '',
    autoria: '',
    conteudo: '',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.pensamentoService.buscarPorId(parseInt(id)).subscribe((res) => {
        this.pensamento = res;
      });
    }
  }

  editarPensamento() {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
