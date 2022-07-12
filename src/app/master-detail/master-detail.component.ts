import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Master } from '../master';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  @Input() master?: Master;

  constructor(
    private route: ActivatedRoute,
    private masterService: MasterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMaster();
  }

  getMaster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.master = this.masterService.getMaster(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.master) {
      this.masterService.updateMaster(this.master);
      // () => this.goBack();
      this.goBack();
    }
  }

}
