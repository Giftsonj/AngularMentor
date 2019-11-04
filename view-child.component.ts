import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {


  @ViewChild('serverNametInput', { static: true }) serverContentInput: ElementRef;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  serverContent: string
  public exployees = [];

  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.exployees = this.empService.getEmployees();

  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverContent = this.serverContentInput.nativeElement.value;
  }

  childToParent() {
    this.childEvent.emit(this.name)
  }
}
