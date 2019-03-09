
import { MedicoComponent } from 'src/app/intermediate2/medico/medico.component';
import { RUTAS } from './app.routes';





describe('Rutas Principales', () => {
    
    it('Debe de existir la ruta /medico/:id', () => {
    
        expect(RUTAS).toContain({ 
            path:'medico/:id',
            component:MedicoComponent    
        })

    });
});
