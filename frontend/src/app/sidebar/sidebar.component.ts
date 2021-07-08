import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  el: any;
  el2: any;
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() {

  }

  activeToogle() {
    this.el = document.querySelector(".sidebar");
    this.el2 = document.querySelector("#btn");

    if (this.el.classList.contains("active")) {
      this.el.classList.remove("active");
    }
    else {
      this.el.classList.add("active");
    }

    if (this.el2.classList.contains("bx-menu")) {
      this.el2.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      this.el2.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  /*
  <script>
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");
  
  btn.onclick = function () {
      sidebar.classList.toggle("active");
      if (btn.classList.contains("bx-menu")) {
          btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
          btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
  }
  searchBtn.onclick = function () {
      sidebar.classList.toggle("active");
  }
  </script>*/

}
