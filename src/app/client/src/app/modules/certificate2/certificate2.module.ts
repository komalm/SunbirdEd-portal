import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { SuiModalModule, SuiSelectModule, SuiDropdownModule, SuiPopupModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@sunbird/shared';
import { TelemetryModule } from '@sunbird/telemetry';
import { PlayerHelperModule } from '@sunbird/player-helper';
//import { CertificateConfigurationComponent, CertificateDetailsComponent, CreateTemplateComponent} from './components';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
//import { BrowseImagePopupComponent } from './components/browse-image-popup/browse-image-popup.component';

import { Certificate2RoutingModule } from './certificate2-routing.module';
import { Certificate2DetailsComponent } from './components/certificate2-details/certificate2-details.component';

@NgModule({
  declarations: [Certificate2DetailsComponent],
  imports: [
    CommonModule,
    Certificate2RoutingModule
  ]
})
export class Certificate2Module { }
