import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { PartidosComponent } from './campeonatos/partidos/partidos.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CampeonatoComponent } from './campeonatos/campeonato/campeonato.component';
import { JugadorComponent } from './jugadores/jugador/jugador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PartidoComponent } from './campeonatos/partidos/partido/partido.component';
import { NominaComponent } from './campeonatos/partidos/nominas/nomina/nomina.component';
import { NominasComponent } from './campeonatos/partidos/nominas/nominas.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'categoria/:id',
        component: CategoriaComponent
    },
    {
        path: 'categorias',
        component: CategoriasComponent
    },
    {
        path: 'campeonato/:id',
        component: CampeonatoComponent
    },
    {
        path: 'campeonatos',
        component: CampeonatosComponent
    },
    {
        path: 'jugador/:id',
        component: JugadorComponent
    },
    {
        path: 'jugadores',
        component: JugadoresComponent
    },
    {
        path: 'partido/:id',
        component: PartidoComponent
    },
    {
        path: 'partidos',
        component: PartidosComponent
    },
    {
        path: 'nomina/:1',
        component: NominaComponent
    },
    {
        path: 'nominas',
        component: NominasComponent
    }


];
