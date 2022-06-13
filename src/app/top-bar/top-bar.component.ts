import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() titulo = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profile(){
    var instance = this;
    if(localStorage.getItem('authToken') != null){
      instance.router.navigate(['client/profile']);
    }else{
      instance.router.navigate(['client/login'])
    }
      
    
  }
}



