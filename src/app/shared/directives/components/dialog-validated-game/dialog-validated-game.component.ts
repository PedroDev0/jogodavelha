import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-dialog-validated-game',
  templateUrl: './dialog-validated-game.component.html',
  styleUrls: ['./dialog-validated-game.component.css']
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
    }else {
      this.mensagem= 'Deu velha'
      this.velha = true;
    }
  }
  onClose() {
    window.location.reload();
  }
}
