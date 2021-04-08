import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { BrowseImagePopupComponent } from '../../../certificate/components/browse-image-popup/browse-image-popup.component';


@Component({
  selector: 'app-certificate2-details',
  templateUrl: './certificate2-details.component.html',
  styleUrls: ['./certificate2-details.component.scss']
})
export class Certificate2DetailsComponent implements OnInit {

  @ViewChild(BrowseImagePopupComponent)
  public browseImage: BrowseImagePopupComponent;

  public unsubscribe$ = new Subject<void>();
 

  constructor() {
  }

  ngOnInit() {
   
  }


}
