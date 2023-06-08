import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() name: string = ''

	ngOnInit() {
		console.log('OnInit');
	}


	constructor() {
		console.log('Contruct');
	}

	ngOnChanges() {
		console.log('OnChanges');
	}
}
