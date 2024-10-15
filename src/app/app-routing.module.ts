import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './common/layout-main/layout-main.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogScreenComponent } from './pages/blog-screen/blog-screen.component';
import { HomeComponent } from './pages/home/home.component';

const layoutMainRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog-screen', component: BlogScreenComponent },
  { path: 'about', component: AboutComponent },
]

const routes: Routes = [
  { path: '', component: LayoutMainComponent, children: layoutMainRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
