import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainPageRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent, LoginComponent],
  providers:[LoginService]
})
export class MainModule {}
