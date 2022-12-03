import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

``

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  
 showHeader=true;

  constructor(private router:Router) {

    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/login'){
            this.showHeader=false
          }
          else{
            this.showHeader= true
          }
          
        }
      }
    )

  }
   

   
  }




  
















    // regForm:FormGroup

    // this.regForm = new FormGroup({
    //   uname:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   cpassword:new FormControl(null,[Validators.required]),
    //   gender:new FormControl(),
    //   subscribe:new FormControl()
    // },this.passwordMatch);

  // passwordMatch(rf:any){
  //   let password = rf.controls['password'].value;
  //   let cpassword = rf.controls['cpassword'].value;

  //   if(password===cpassword){
  //     return null
  //   }
  //   else{
  //     return{
  //       'passwordsMatch':true
  //     }
  //   }

  // }

  // show(){
  //   console.log(this.regForm);
  //   this.regForm.reset()
  // }
  // getC(control:any){

  //   return this.regForm.get(control)

  // }
  // getE(control:any){

  //   return this.regForm.get(control)?.['errors']

  // }



  
  // states = [
  //   {
  //     id: 1,
  //     name: "Andhra Pradesh",
  //     code: "AP"
  //   },
  //   {
  //     id: 2,
  //     name: "Telangana",
  //     code: "TS"
  //   },
  //   {
  //     id: 3,
  //     name: "Tamil Nadu",
  //     code: "TN"
  //   },
  //   {
  //     id: 4,
  //     name: " Karnataka",
  //     code: "KS"
  //   },
  // ]

  // districts = [
  //   {
  //     id: 1,
  //     name: "Krishna",
  //     s_id: 1
  //   },
  //   {
  //     id: 2,
  //     name: "East Godavari",
  //     s_id: 1
  //   },
  //   {
  //     id: 3,
  //     name: "West Godavari",
  //     s_id: 1
  //   },
  //   {
  //     id: 4,
  //     name: "Guntur",
  //     s_id: 1
  //   },
  //   {
  //     id: 5,
  //     name: "Visakhapatnam",
  //     s_id: 1
  //   },
  //   {
  //     id: 6,
  //     name: "Hyderabad",
  //     s_id: 2
  //   },
  //   {
  //     id: 7,
  //     name: "Warangal",
  //     s_id: 2
  //   },
  //   {
  //     id: 8,
  //     name: "Karimnagar",
  //     s_id: 2
  //   },
  //   {
  //     id: 9,
  //     name: "Medak",
  //     s_id: 2
  //   },
  //   {
  //     id: 10,
  //     name: "Suryapet",
  //     s_id: 2
  //   },
  //   {
  //     id: 11,
  //     name: "Chennai",
  //     s_id: 3
  //   },
  //   {
  //     id: 12,
  //     name: "Coimbatore",
  //     s_id: 3
  //   },
  //   {
  //     id: 13,
  //     name: "Vellore",
  //     s_id: 3
  //   },
  //   {
  //     id: 14,
  //     name: "Madurai",
  //     s_id: 3
  //   },
  //   {
  //     id: 15,
  //     name: "Thanjavur",
  //     s_id: 3
  //   },
  //   {
  //     id: 16,
  //     name: "Mysuru",
  //     s_id: 4
  //   },
  //   {
  //     id: 17,
  //     name: "Raichur",
  //     s_id: 4
  //   },
  //   {
  //     id: 17,
  //     name: "Bengaluru",
  //     s_id: 4
  //   },
  //   {
  //     id: 18,
  //     name: "Ballari",
  //     s_id: 4
  //   },
  //   {
  //     id: 19,
  //     name: "Udupi",
  //     s_id: 4
  //   },
  //   {
  //     id: 20,
  //     name: "Koppal",
  //     s_id: 4
  //   }
  // ]

  // filteredDistricts = this.districts;


  // updateDistricts(e: any) {
  //   let sId = e.target.value;
  //   this.filteredDistricts = this.districts.filter(
  //     (d) => d['s_id'] == sId

  //   )
  // }




