import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IUserDTO } from '../models/user.model';
import { IFieldMessage } from '../models/fields.model';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { LoginGateway } from './domain/login-gateway';
import { FieldMessagesService } from './services/field-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output()
  onAuenticateUser: EventEmitter<IUserDTO> = new EventEmitter();

  loginForm!: FormGroup;
  emailFieldStatus!: IFieldMessage;
  passwordFieldStatus!: IFieldMessage;
  fieldNames!:{[key:string]:string};
  loginResponse!: string;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private errorMessageService: FieldMessagesService,
    private translateService: TranslateService,
    private loginService: LoginGateway,
    private router: Router
  ) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('en'); 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ]],
      password: ['', [ Validators.required, Validators.minLength(5)]]
    });

    const emailField = this.loginForm.controls['email'];
    emailField.setValue('carlos@angulo.com');

    emailField.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( _ => {
      this.emailFieldStatus = this.errorMessageService.getFieldMessage(emailField.errors)
    });

    const passwordField = this.loginForm.controls['password'];
    passwordField.setValue('123456');
    this.passwordFieldStatus = this.errorMessageService.getDefaultMessage();

    passwordField.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( _ => {
      this.passwordFieldStatus = this.errorMessageService.getFieldMessage(passwordField.errors)
    });
    
    this.translateService
    .get(['login.fields.email', 'login.fields.password'])
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((translations) => {
      this.fieldNames = translations;
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.loginService.login(email, password)
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((x) => of({error: 'paila'}))
      )
      .subscribe((userData) => {
        console.log(userData)
        if(userData.user?.uid) {
          this.loginResponse = 'correct';
          this.onAuenticateUser.emit(userData);
          this.router.navigate(['admin/users'])
          return;
        }

        this.loginResponse = 'error';
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
