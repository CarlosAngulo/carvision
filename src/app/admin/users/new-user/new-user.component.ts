import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropDownOption } from 'src/app/shared/dropdown/dropdown.component';
import { UsersGateway } from '../domain/users-gateway';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { IUserDTO } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewComponent implements OnInit {
  @Output() onUserCreated: EventEmitter<IUserDTO> = new EventEmitter<IUserDTO>();
  @Output() onCancelCreation: EventEmitter<void> = new EventEmitter();
  createUserForm!: FormGroup;
  unsubscribe$: Subject<void> = new Subject<void>();
  roles: IDropDownOption[] = [
    { text: 'Regular User', value: 'user'},
    { text: 'Administrator', value: 'admin'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersGateway
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ]],
      role: ['user', [Validators.required]]
    });
  }

  onRoleChange(event: IDropDownOption) {
    this.createUserForm.get('role')?.patchValue(event.value);
  }

  onCancel(): void {
    this.clearForm();
    this.onCancelCreation.next();
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      const name = this.createUserForm.get('name')?.value;
      const email = this.createUserForm.get('email')?.value;
      const role = this.createUserForm.get('role')?.value;

      this.usersService.createUser(name, email, role)
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((x) => of(x.error))
      )
      .subscribe((userData: IUserDTO) => {
        if (userData.id) {
          this.clearForm();
          this.onUserCreated.next(userData)
        }
      });
    }
  }

  clearForm() {
    this.createUserForm.reset(this.createUserForm.value)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
