import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Opiton } from '../../model/option.model';

@Directive({
  selector: '[appButtonGame]'
})
export class ButtonGameDirective implements AfterViewInit {


  private opX: Opiton = {
    texButon: 'X',
    colorTextButton: 'red'
  };
  private opO: Opiton = {
    texButon: 'O',
    colorTextButton: 'blue'
  };

  ngAfterViewInit() {
    this.load(true);
  }
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onClick() {
    let container = this.el.nativeElement as HTMLElement;
    let butons = Array.from(container.getElementsByTagName('button'));

    butons.forEach(e => {

      fromEvent(e, 'click').subscribe(
        res => {
          if (this.opX.lastPlayed && e.textContent.length <= 0) {
            e.textContent = this.opX.texButon;
            e.style.color = this.opX.colorTextButton;
            this.load(false)
          } else if (this.opO.lastPlayed && e.textContent.length <= 0){
            e.textContent = this.opO.texButon;
            e.style.color = this.opO.colorTextButton;
            this.load(true)
          }
        }
      )
    });

  }



  load(playedLast: boolean) {
    this.opX.lastPlayed = playedLast;
    this.opO.lastPlayed = !playedLast;
  }


}
