# Tarea

1. Crear el módulo ```heroes-routing.module.ts```
    * tip: Comando que pueden usar
        ```ng g m ...... heroesRouting --flat ```

2. Definir las rutas
```
const rutas: Routes = [
    path: '',
    children: []
];
```

3. Dentro del objeto ```children```, crear los siguientes PATHS:
    * path: 'listado' component: ListadoComponent,
    * path: 'agregar' component: AgregarComponent,
    * path: 'editar/:id' component: AgregarComponent,
    * path: 'buscar' component: BuscarComponent,
    * path: ':id' component: HeroeComponent,
    * path: '**' redirectTo: 'listado'

### Tip: no se les olvide exportar el routerModule dentro del heroesRouting.module

4. Importar el HeroesRoutingModule en el HeroesModule

5. Realizar el LazyLoad del módulo ```HeroesModule``` en el archivo de rutas principal ```app-routing.module.ts``` con el siguiente path:

```
{
    path: 'heroes',
    loadChildren: () => import(......).then(......)
}
```

6. Prueben que sus rutas funcionen