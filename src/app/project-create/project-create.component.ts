import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  projectForm: any = FormGroup;
  submited: boolean = false;

  constructor(private formBuilder: FormBuilder, private globalFunction: CommonServiceService) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      'organization': ['', Validators.required],
      'category': ['', Validators.required],
      'activity': ['', Validators.required],
      'title': ['', Validators.required],
      'minAge': ['', Validators.required, Validators.max(18)],
      'maxAge': ['', Validators.required, Validators.max(100)],
      'desc': ['', Validators.required],
    });
  }
  get f() {
    return this.projectForm.controls;
  }

  saveProject() {
    this.submited = true;
    if (this.projectForm.invalid) {
      this.globalFunction.saveData('project', this.projectForm.value).subscribe((response: any) => {
        alert('Project Added Successfully');
        this.projectForm.reset();
      });
    }
  }

}
