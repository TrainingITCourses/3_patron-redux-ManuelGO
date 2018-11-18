import { Mission } from './../store/models/mission';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStore, GlobalSlideTypes } from '../store/global-store.state';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  criterias$: Observable<any>;
  filtered$: Observable<any>;

  selection: string;
  constructor(private commonService: CommonService, private global: GlobalStore) { }

  ngOnInit() {
    this.getData();
  }
  onSelection(selection) {
  this.selection = selection;
  switch (this.selection) {
    case 'Agencias':
      this.criterias$ = this.global.select$(GlobalSlideTypes.agencies).pipe(
        map(launches => launches)
      );
      break;
    case 'Estados':
    this.criterias$ = this.global.select$(GlobalSlideTypes.statuses).pipe(
      map(agencies => agencies)
    );
      break;
    case 'Tipos':
    this.criterias$ = this.global.select$(GlobalSlideTypes.types).pipe(
      map(types => types)
    );
      break;
  }
  }
  onCriteriaSelection = e => {
    this.getFilteredResults(e);
  }

 getFilteredResults = (e) => {
  switch (this.selection) {
    case 'Agencias':
      this.filterByAgency(e);
      break;
    case 'Estados':
      this.filterByStatus(e);
      break;
    case 'Tipos':
      this.filterByTypes(e);
      break;
  }
 }
 filterByStatus = (e: any) => {
  this.filtered$ = this.global.select$(GlobalSlideTypes.launches).pipe(
    map((res: any) => res.filter(l => l.status === e.id))
  );
 }
 filterByAgency = (e: any) => {
  this.filtered$ = this.global.select$(GlobalSlideTypes.launches).pipe(
    map((res: any) => res.filter(l => {
      if (l.lsp) {
        return l.lsp.id === e.id;
      }
    }))
  );
 }
 filterByTypes = (e: any) => {
  this.filtered$ = this.global.select$(GlobalSlideTypes.launches).pipe(
    map((res: any) => res.filter(l => {
      if (l.missions[0]) {
        return l.missions[0].type === e.id;
      }
    }))
  );
 }
 getData = () => {
   this.commonService.getLaunches();
   this.commonService.getAgencies();
   this.commonService.getMissionTypes();
   this.commonService.getStatusTypes();
 }

}



