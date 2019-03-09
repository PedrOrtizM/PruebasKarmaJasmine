import { Routes } from '@angular/router';
import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';
import { MedicoComponent } from 'src/app/intermediate2/medico/medico.component';
import { IncrementadorComponent } from 'src/app/intermediate2/incrementador/incrementador.component';




export const RUTAS: Routes = [

    { path:'hospital',component:HospitalComponent},
    { path:'medico/:id',component:MedicoComponent    },
    { path:'**',component:IncrementadorComponent }

]