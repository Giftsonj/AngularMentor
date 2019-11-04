import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
// import { EmployeeService } from '../employee.service';
import { EmployeeService } from 'app/employee.service';
//import { EmployeeService } from '../employee.service'
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  
  @ViewChild('serverNametInput') serverContentInput: ElementRef;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  
  serverContent: string
  public exployees = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.exployees = this.empService.getEmployees();
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput.nativeElement.value)

    this.serverContent = this.serverContentInput.nativeElement.value;
  }



  childToParent() {
    this.childEvent.emit(this.name)
  }
}