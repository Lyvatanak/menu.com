// const product = localStorage.getItem('products');
// console.log(JSON.parse(product));
const product = JSON.parse(localStorage.getItem('products'));

function Viewproduct(){
    var column = '';
product.forEach((val,i,array) => {
    column += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${val.image}" alt="..." />
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
                    <button type="button" id="btn-update"modal" data-bs-target="#exampleModal" class="btn btn-outline-primary my-3 mx-3 ">Update</button>
                    <button type="button" id="btn-delete"modal" data-bs-target="#exampleModal" class="btn btn-outline-danger my-3 mx-3 ">Delete</button>
                </div>
            </div>
        </div>
    `;
});
document.getElementById("demo").innerHTML = column;
}