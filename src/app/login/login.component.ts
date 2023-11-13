import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { fadeAnimation2 } from '../route-animations';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation2],
  providers: [MessageService]
})
export class LoginComponent {

  tokenName = 'ItReportToken';
  username: any = new FormControl(null, [Validators.required]);
  password: any = new FormControl(null, [Validators.required]);

  previousUrl!: string;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private messageService: MessageService
  ) { }

  async ngOnInit() {
    await this.checkLogin();
  }

  async onLogin() {
    const result = await this.loginService.login(this.username.value, this.password.value);
    if (result.statusCode === 200) {
      localStorage.setItem(this.tokenName, result.token);
      sessionStorage.setItem(this.tokenName, result.token);
      this.route.navigate(['dashboard']);
    } else {
      if (result.statusCode === 400) {
        this.messageService.add({ severity: 'error', summary: 'User หรือ Password ผิดพลาด', detail: 'โปรดตรวจสอบ User / Password ใหม่' });
      } else {
        this.messageService.add({ severity: 'warn', summary: 'เกิดข้อผิดพลาด', detail: 'ไม่มีสามารถเชื่อมต่อ Server ได้' });
      }
    }
  }

  async checkLogin() {
    const loginResult = await this.loginService.getToken();
    if (loginResult !== null) {
      this.route.navigate(['dashboard']);
    } else {
      this.route.navigate(['login']);
    }
  }

  backToWebsite(){
    this.route.navigate(['dashboard']);
  }

}
