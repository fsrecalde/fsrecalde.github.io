import{ Routes } from "@angular/router"; 

export const routes: Routes=[ 
    { path:"", loadComponent:()=>import("./components/home.component").then(m=>m.HomeComponent)},
    { path:"rbms",loadComponent:()=>import("./pages/rbms-case-study/rbms-case-study.component").then(m=>m.RbmsCaseStudyComponent)},
    { path:"**",redirectTo:""}
];