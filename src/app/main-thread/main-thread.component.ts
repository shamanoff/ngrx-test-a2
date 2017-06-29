import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../messages/message';
import {DbService} from '../shared/db.service';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {LoadMessagesAction} from "../actions/actions";

@Component({
  selector: 'main-thread',
  templateUrl: './main-thread.component.html',
  styleUrls: ['./main-thread.component.scss']
})
export class MainThreadComponent implements OnInit {

  message$: Observable<Message[]>;
  constructor(private _db: DbService, private _store: Store<ApplicationState>) {

  }

  ngOnInit() {
    this._db.fetchData().subscribe(
      // (messages)=>this.message$ = messages
      messages => this._store.dispatch(
        new LoadMessagesAction(messages)
      )
    );
  }

}
