import { PipesComponent } from "./pipes/pipes.component";
import { FormUserComponent } from "./form-user/form-user.component";
import { FatArrowComponent } from "./fat-arrow/fat-arrow.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { FruitsComponent } from "./fruits/fruits.component";
import { AnimalComponent } from "./animal/animal.component";
import { ClassUserComponent } from "./class-user/class-user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { FormPracticeComponent } from "./form-practice/form-practice.component";
import { StatesComponent } from "./states/states.component";
import { CountryComponent } from "./country/country.component";
import { GethttpserviceComponent } from "./gethttpservice/gethttpservice.component";
import { ProductComponent } from "./product/product.component";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { StoreImgInDbComponent } from "./store-img-in-db/store-img-in-db.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";
import { ValidatorsComponent } from "./validators/validators.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CanActivateAuthGuard } from "./guard/auth.guard";
import { AlertComponent } from "./_directives/alert.component";
import { UserPasswordResetComponent } from "./user-password-reset/user-password-reset.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "pipes", component: PipesComponent },
  {
    path: "user",
    component: UserComponent,
    children: [{ path: ":id", component: UserDetailsComponent }]
  },
  { path: "country", component: CountryComponent },
  { path: "detail/:id/:name", component: StatesComponent },
  { path: "fruits", component: FruitsComponent },
  { path: "animal", component: AnimalComponent },
  { path: "product", component: ProductComponent, canActivate: [CanActivateAuthGuard] },
  { path: "reset", component: UserPasswordResetComponent, canActivate: [CanActivateAuthGuard] },
  { path: "cuser", component: ClassUserComponent },
  { path: "customdirective", component: CustomDirectivesComponent },
  { path: "fatarrow", component: FatArrowComponent },
  { path: "form", component: FormPracticeComponent },
  { path: "formuser", component: FormUserComponent },
  { path: "data", component: GethttpserviceComponent },
  { path: 'image', component: StoreImgInDbComponent },
  { path: 'imageupload', component: ImageUploadComponent },
  { path: 'validators', component: ValidatorsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }

export const routingComponents = [
  UserComponent,
  HomeComponent,
  FruitsComponent,
  AnimalComponent,
  ClassUserComponent,
  FatArrowComponent,
  FormPracticeComponent,
  UserDetailsComponent,
  FormUserComponent,
  CountryComponent,
  StatesComponent,
  GethttpserviceComponent,
  ProductComponent,
  PipesComponent,
  CustomDirectivesComponent,
  StoreImgInDbComponent,
  ImageUploadComponent,
  ValidatorsComponent,
  RegisterComponent,
  LoginComponent,
  AlertComponent,
  UserPasswordResetComponent

];
