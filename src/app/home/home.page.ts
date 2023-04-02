import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule],
})
export class HomePage {
  
  altura:number=0;
  
  radioSelecionada:string='';
  res:any;



  textoDigitado:string='';
  valorSelecionado:string = '';
  resultado:number=0;
  constructor() {}
  imc(){
    if(this.radioSelecionada=='fem'){
      this.res= 62.1 * this.altura - 44.7;
    }
    else if(this.radioSelecionada=='masc'){
      this.res= 72.7 *this.altura -58;
    }
    else{
      this.res="Digite uma altura";
    }
   
  }
  
  valorVenda(){
    if(this.valorSelecionado =='pix'){
      this.resultado=parseFloat(this.textoDigitado) - parseFloat(this.textoDigitado)*0.1;
    }
    else if(this.valorSelecionado=='debito'){
      this.resultado=parseFloat(this.textoDigitado);
    }
    else if(this.valorSelecionado=='credito'){
      this.resultado= parseFloat(this.textoDigitado) + parseFloat(this.textoDigitado)*0.1;
    }
  }
 
}

