import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.css']
})
export class ProjectCostComponent implements OnInit {

  projectCostForm: any = FormGroup;
  submited: boolean = false;
  rows: any = FormArray;

  constructor(private formBuilder: FormBuilder, private globalFunction: CommonServiceService) {
    this.rows = this.formBuilder.array([]);
  }

  allproject: any;
  ngOnInit(): void {
    this.projectCostForm = this.formBuilder.group({
      'project': ['', Validators.required],
    });
    this.projectCostForm.addControl('rows',this.rows);
    this.getAllProject();
  }
  get addDynamicRow() {
    return this.projectCostForm.get('rows') as FormArray;
  }
  addRow() {
    console.log(this.createFormGroup());
    
    this.rows.push(this.createFormGroup());
  }

  removeRow(rowNumber: number) {
    this.rows.removeAt(rowNumber);
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      'duration': ['',Validators.required],
      'cost': ['',Validators.required],
    });
  }
  getAllProject() {
    this.globalFunction.getData('project').subscribe((response: any) => {
      this.allproject = response;
    });
  }

  saveProjectCost() {
    this.submited = true;
    if (this.projectCostForm.invalid) {
      this.globalFunction.saveData('cost', this.projectCostForm.value).subscribe((response: any) => {
        alert('Project Cost Added Successfully');
        this.projectCostForm.reset();
      });
    }
  }

}
