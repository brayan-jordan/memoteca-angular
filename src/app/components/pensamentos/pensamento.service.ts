import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento.types';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(
      this.API + '/' + pensamento.id,
      pensamento
    );
  }

  excluir(pensamentoId: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(this.API + '/' + pensamentoId);
  }

  buscarPorId(pensamentoId: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(this.API + '/' + pensamentoId);
  }
}
