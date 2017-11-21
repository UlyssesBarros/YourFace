import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';
import { RelatorioPage } from '../relatorio/relatorio';
import { CadastroProfessorPage } from '../cadastro-professor/cadastro-professor';
import { CadastroAlunoPage } from '../cadastro-aluno/cadastro-aluno';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alertHomeCtrl:AlertController    
  ) {
  }

  abrirCadastroAluno(){
    this.navCtrl.push(CadastroAlunoPage)
  }

  abrirCadastroProfessor(){
    this.navCtrl.push(CadastroProfessorPage)
  }
  
  abrirRelatorio(){
    this.navCtrl.push(RelatorioPage)

  }
  sair(){
    this.navCtrl.push(LoginPage)
  }

}
