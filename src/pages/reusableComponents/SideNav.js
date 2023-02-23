import React from 'react'
import { Outlet } from 'react-router-dom'


function SideNav() {
  return (
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/abc"  style={{textDecoration:'none',color:"white"}}  class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li class="w-100">
                                <a href="/sidenav/alert" class="nav-link px-0"> <span class="d-none d-sm-inline">Alert</span></a>
                            </li>
                            <li>
                                <a href="/abc" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                  
                    <li>
                        <a href="/abc" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                   
                    
                    <li>
                        <a href="/abc" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
               
            </div>
        </div>
        <div class="col py-3" >
          <Outlet/>
        </div>
    </div>
</div>
  )
}



export default SideNav