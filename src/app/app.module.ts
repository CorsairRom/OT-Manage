import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/app.layout.module';
import { TokenInterceptor } from './OT_DSR/core/interceptors/token.interceptor';

import { ProductService } from './OT_DSR/dashboard/service/product.service';
import { AuthService } from './OT_DSR/core/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
    ProductService,
    AuthService,
    MessageService,
    provideHttpClient(withInterceptors([TokenInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
