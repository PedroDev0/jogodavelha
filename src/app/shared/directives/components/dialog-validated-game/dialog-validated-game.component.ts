import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-dialog-validated-game',
  templateUrl: './dialog-validated-game.component.html',
  styleUrls: ['./dialog-validated-game.component.css'],
  animations: [
    trigger('dialogAnimation', [
      state('void', style({
        transform: 'scale3d(.3, .3, .3)',
        opacity: 0
      })),
      transition('void <=> *', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class DialogValidatedGameComponent {
  
  mensagem: string;
  gameOption: string;
  color: string;
  velha: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gameOption: string, color: string }) {
    
    if (data.gameOption != "V") {
      this.mensagem= 'Parabéns ';
      this.gameOption = data.gameOption;
      this.color = "color:"+ data.color;
      this.velha= false;
    } else {
      this.mensagem= 'Deu velha'
      this.velha = true;
    }
  }
  onClose() {
    window.location.reload();
  }
}
