import { NgModule } from '@angular/core';
import { AuthGuard } from '@sunbird/core';
import { Routes, RouterModule } from '@angular/router';
import { Certificate2DetailsComponent} from './components/certificate2-details/certificate2-details.component';



const routes: Routes = [
  {
    path: '', component: Certificate2DetailsComponent,
    data: {
      telemetry: {
        env: 'certs', pageid: 'certificate-configuration', type: 'view', subtype: 'paginate', ver: '1.0'
      },
     
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Certificate2RoutingModule { }
