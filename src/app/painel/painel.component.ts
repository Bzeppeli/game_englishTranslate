import { Component, OnInit } from '@angular/core';
import { Frase  } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'traduza a frase'
  public resposta: string = ''
  
  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso: number = 0

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(){
    //trocar a pergunta da rodada
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //this.rodada = this.rodada = 4 ? this.rodada=0 : this.rodada
      alert('Bom trabalho!')
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      console.log(this.rodada)
      this.atualizaRodada()

    }else{
      alert('Errow')
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
