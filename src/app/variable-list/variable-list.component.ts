import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-variable-list',
    templateUrl: './variable-list.component.html',
    styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent implements OnInit {
    @Input() title: string;

    content:string[] =[];

    constructor() { }

    ngOnInit() {
    }

    //--------------------------------------------------------------------------------
    addLabel(){
	this.content.push("Content #"+this.content.length);
    }
}
