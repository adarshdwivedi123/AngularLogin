import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChakraComponent } from './components/view-chakra/view-chakra.component';
import { ChakraUIComponent } from './components/chakra-ui/chakra-ui.component';


const routes: Routes = [
  {
    path :'',
    pathMatch:'full',
    component:ChakraUIComponent
  },
  // {
  //   path:'views',component:ViewChakraComponent,
    
    

    
  // },

  {
    path:'views',component:ViewChakraComponent,
    
    

    
  },
  // {
  //   path:'view',component:ChakraUIComponent,
  //   pathMatch:'full'
  // }

  // {
  //   path:'',
  //   pathMatch:'full',
  //   component:LandingComponent
  // },
  // {
  //   path:'login',
  //   component:LoginComponent,

  // },
  // {
  //   path:'sign-up',
  //   component:SignUpComponent,
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
