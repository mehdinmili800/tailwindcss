import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FonctionsComponent } from './pages/fonctions/fonctions.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { RoutePagesComponent } from './menu/route-pages/route-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ContainerSpacingComponent,
    TypographyComponent,
    SizingComponent,
    PositionZIndexComponent,
    BackgroundShadowComponent,
    BorderFilterComponent,
    InterActivityComponent,
    PseudoClassesPseudoElementComponent,
    BreakpointMediaQueriesComponent,
    FlexBoxComponent,
    GridComponent,
    TransitionsAnimationComponent,
    TransformComponent,
    DarkModeComponent,
    TaiwindCliComponent,
    ApplyLayerDirectivesComponent,
    FonctionsComponent,
    PluginsComponent,
    RoutePagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
