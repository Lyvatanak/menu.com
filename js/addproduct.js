var btnAdd = document.getElementById('btn-add');
var Name  = document.getElementById('name');
var minPrice = document.getElementById('min-price');
var maxPrice = document.getElementById('max-price');
var image    = document.getElementById('image');

const allproduct = JSON.parse(localStorage.getItem('products'));

btnAdd.addEventListener('click',()=>{
    allproduct.push({
        id:allproduct.length+1,
        title:Name.value,
        min_price:Number(minPrice.value),
        max_price:Number(maxPrice.value),
        image:'assets/Image/'+image.files[0].Name
    });
    localStorage.setItem('products',JSON.stringify(allproduct));
});