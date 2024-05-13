import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { JugadorFormComponent } from './jugadores/jugador-form/jugador-form.component';
import { PartidosComponent } from './partidos/partidos.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CampeonatoComponent } from './campeonatos/campeonato/campeonato.component';
import { JugadorComponent } from './jugadores/jugador/jugador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PartidoComponent } from './partidos/partido/partido.component';
import { NominaComponent } from './nominas/nomina/nomina.component';
import { NominasComponent } from './nominas/nominas.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'categorias',
        component: CategoriasComponent
    },
    {
        path: 'campeonato',
        component: CampeonatoComponent
    },
    {
        path: 'campeonatos',
        component: CampeonatosComponent
    },
    {
        path: 'jugador',
        component: JugadorComponent
    },
    {
        path: 'jugadores',
        component: JugadoresComponent
    },
    {
        path: 'partido',
        component: PartidoComponent
    },
    {
        path: 'partidos',
        component: PartidosComponent
    },
    {
        path: 'nomina',
        component: NominaComponent
    },
    {
        path: 'nominas',
        component: NominasComponent
    }


];
