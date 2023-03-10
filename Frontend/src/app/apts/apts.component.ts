import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IApts } from './apts';
import { AptsService } from './apts.service';

@Component({
  selector: 'app-apts',
  templateUrl: './apts.component.html',
  styleUrls: ['./apts.component.css']
})
export class AptsComponent implements OnInit {

  public apts: IApts[]=[]
  constructor(private _aptsservice: AptsService) { }

  ngOnInit(): void {
    this._aptsservice.getBuildings().subscribe(data => this.apts = data);
  }
}
