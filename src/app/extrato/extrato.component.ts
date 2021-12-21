import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    this.transferenciaService.allTransferencias().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias
    })
  }

}
