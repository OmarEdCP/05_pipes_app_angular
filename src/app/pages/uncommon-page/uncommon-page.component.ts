import { Component, linkedSignal, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

const client1 ={
  name: 'Alejandro',
  gender: 'male',
  age:39,
  address: 'Ottawa, Canadá'
}

const client2 ={
  name: 'Alejandra',
  gender: 'female',
  age:33,
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe,UpperCasePipe,KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(){
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18nPlural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal(
    ['Luis','Mariana','Eduardo','Fernanda','Jorge','Sofía','Carlos','Valeria','Ricardo','Andrea','Diego','Isabela','Fernando','Camila','Alejandro']
  )

  deleteClient() {
    this.clients.update(prev => prev.slice(1) );
  }

  // KeyValue Pipe
  profile ={
  name: 'Alejo',
  gender: 'female',
  address: 'Toronto, Canadá'
  }

  //Async Pipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Tenemos data de la promesa.');
     console.log('Promesa finalizada')
    }, 3500);
  });


}
