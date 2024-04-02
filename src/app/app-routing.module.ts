import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './pages/color/color.component';
import { ContainerSpacingComponent } from './pages/container-spacing/container-spacing.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { SizingComponent } from './pages/sizing/sizing.component';
import { PositionZIndexComponent } from './pages/position-z-index/position-z-index.component';
import { BackgroundShadowComponent } from './pages/background-shadow/background-shadow.component';
import { BorderFilterComponent } from './pages/border-filter/border-filter.component';
import { InterActivityComponent } from './pages/inter-activity/inter-activity.component';
import { PseudoClassesPseudoElementComponent } from './pages/pseudo-classes-pseudo-element/pseudo-classes-pseudo-element.component';
import { BreakpointMediaQueriesComponent } from './pages/breakpoint-media-queries/breakpoint-media-queries.component';
import { FlexBoxComponent } from './pages/flex-box/flex-box.component';
import { GridComponent } from './pages/grid/grid.component';
import { TransitionsAnimationComponent } from './pages/transitions-animation/transitions-animation.component';
import { TransformComponent } from './pages/transform/transform.component';
import { DarkModeComponent } from './pages/dark-mode/dark-mode.component';
import { TaiwindCliComponent } from './pages/taiwind-cli/taiwind-cli.component';
import { ApplyLayerDirectivesComponent } from './pages/apply-layer-directives/apply-layer-directives.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { RoutePagesComponent } from './menu/route-pages/route-pages.component';


const routes: Routes = [
  {
    path:'',redirectTo:'route-pages',pathMatch:'full',
  },
  {
    path:'color',component:ColorComponent,
  },
  {
    path:'container-spacing',component:ContainerSpacingComponent,
  },
  {
    path:'typegraphy',component:TypographyComponent,
  },
  {
    path:'sizing',component:SizingComponent,
  },
  {
    path:'postion-z-index',component:PositionZIndexComponent,
  },
  {
    path:'background-shadow',component:BackgroundShadowComponent,
  },
  {
    path:'border-fliter',component:BorderFilterComponent,
  },
  {
    path:'interActivity',component:InterActivityComponent,
  },
  {
    path:'pseudoClasses-pseudoElement',component:PseudoClassesPseudoElementComponent,
  },
  {
    path:'breakpoint-mediaQueries',component:BreakpointMediaQueriesComponent,
  },
  {
    path:'flex-box',component:FlexBoxComponent,
  },
  {
    path:'grid',component:GridComponent,
  },
  {
    path:'transitions-animation',component:TransitionsAnimationComponent,
  },
  {
    path:'transform',component:TransformComponent,
  },
  {
    path:'dark-mode',component:DarkModeComponent,
  },
  {
    path:'taiwind-cli',component:TaiwindCliComponent,
  },
  {
    path:'apply-layerDirectives',component:ApplyLayerDirectivesComponent,
  },
  {
    path:'plugins',component:PluginsComponent,
  },

  // menu the pages

  {
    path:'route-pages',component:RoutePagesComponent,
  }
  
  
  


  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
