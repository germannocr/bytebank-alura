import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService, private router: Router) {}

  transferir() {
    const emitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }
    this.transferenciaService.adicionar(emitir).subscribe(resultado => {
      this.limpar()
      this.router.navigateByUrl('extrato')
    },
    (error) => console.log(error))
  }

  limpar() {
    this.valor = 0
    this.destino = 0
  }
}
