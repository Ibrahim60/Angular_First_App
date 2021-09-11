import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _service: UserService) {
   }

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   skill: new FormGroup({
    //     skillName: new FormControl(),
    //     experience: new FormControl(),
    //   })
    // });
    this.userForm = this.fb.group({
      id: [new Date().getTime()],
      firstName: [],
      lastName: [],
    });
  }

  onLoad(): void {
    // this.userForm.get('firstName').setValue('Usman');
    // this.userForm.get('lastName').setValue('Saleh');

    this.userForm.patchValue({
      firstName: 'Usman',
      lastName: 'Saleh',
      skill: {
        skillName: 'Angular',
        experience: '4 yrs'
      }
    });
  }

  ngOnDestroy(): void {
    //alert('you are leaving');
  }

  onSubmit(): void {
    this._service.add(this.userForm.value);

  }
}
