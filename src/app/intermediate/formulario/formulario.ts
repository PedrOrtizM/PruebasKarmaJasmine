import { FormGroup, FormBuilder, Validators } from '@angular/forms'


export class Formulario{

    form:FormGroup;



    constructor( fb:FormBuilder){

        this.form = fb.group({
            email: ['',[Validators.email,Validators.required]],
            password: ['',Validators.required]
        });

    }



}