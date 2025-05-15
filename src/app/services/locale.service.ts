import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private curretLocale = signal<AvailableLocale>('fr');

  constructor(){
    this.curretLocale.set(
      localStorage.getItem('locale') as AvailableLocale  ?? 'es'
    )
  }

  getLocale(){
    return this.curretLocale();
  }

  changeLocale(locale:AvailableLocale){
    localStorage.setItem('locale',locale);
    this.curretLocale.set(locale);
    window.location.reload();
  }

}
