import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  allproject: any = [];
  allprojectCost:any;
  constructor(private globalFunction: CommonServiceService) { }

  ngOnInit(): void {
    this.getAllProject();
  }


  projectDelete(id: string) {
    this.globalFunction.deleteData(id).subscribe((response: any) => {
      alert("Project Deleted Successfully");
      this.getAllProject();
    });
  }
  getAllProject() {
    this.globalFunction.getData('project').subscribe((response: any) => {
      this.allproject = response;
      this.getAllProjectCost();
    });
  }
  getAllProjectCost() {
    this.globalFunction.getData('cost').subscribe((response: any) => {
      this.allprojectCost = response;
      this.allproject.forEach((element:any,key:any) => {
        this.allproject[key]['totalCost'] = 0;

        this.allprojectCost.forEach((element2:any) => {
          if(element2.project == element.id){
            element2['rows'].forEach((element3:any) => {
              this.allproject[key]['totalCost'] += parseInt(element3.cost);
            });
          }
        });
      });
    });
  }

}
