/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var btndelete = document.getElementById("btn-delete");
var btnUpdate = document.getElementById("btn-update");

const product = [
    {
        id : 1,
        title : "clothes",
        min_price : 15,
        max_price : 25,
        img : "../imag/new-1.jpg",
    },
    {
        id : 2,
        title : "clothes",
        min_price : 25,
        max_price : 35,
        img : "../imag/New-2.jpg",
    },
    {
        id : 3,
        title : "clothes",
        min_price : 35,
        max_price : 45,
        img : "../imag/New-3.jpg",
    },
    {
        id : 4,
        title : "clothes",
        min_price : 45,
        max_price : 55,
        img : "../imag/New-4.webp",
    },

];

var column = "";
product.forEach((val,i,array) => {
    column += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${val.img}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${val.title}</h5>
                        <!-- Product price-->
                        $${val.min_price} - $${val.max_price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    <button type="button" id="btn-delete"modal" data-bs-target="#exampleModal" class="btn btn-outline-danger my-2 mx-4">Delete</button>
                    <button type="button" id="btn-update"modal" data-bs-target="#exampleModal" class="btn btn-outline-primary my-2">Update</button>
                </div>
            </div>
        </div>
    `;
});
document.getElementById("demo").innerHTML = column;