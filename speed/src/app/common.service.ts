import { GlobalStore } from './store/global-store.state';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoadLaunches, LoadStatuses, LoadAgencies, LoadTypes } from './store/global-store.actions';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public launches: any[];
  public statuses: any[];

  constructor(private http: HttpClient, private global: GlobalStore) { }

  public getStatusTypes = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(
        map((res: any) => res.types),
      )
      .subscribe(statuses => this.global.dispatch(new LoadStatuses(statuses)))

  public getAgencies = () =>
  this.http
    .get(environment.url + '/assets/data/agencies.json')
    .pipe(map((res: any) => res.agencies))
    .subscribe(agencies => this.global.dispatch(new LoadAgencies(agencies)))

  public getMissionTypes = () =>
  this.http
    .get(environment.url + '/assets/data/missiontypes.json')
    .pipe(map((res: any) => res.types))
    .subscribe(types => this.global.dispatch(new LoadTypes(types)))
  public getLaunches = () =>
  this.http
    .get(environment.url + '/assets/data/launches.json')
    .pipe(map((res: any) => res.launches))
    .subscribe(launches => this.global.dispatch(new LoadLaunches(launches)))
}
