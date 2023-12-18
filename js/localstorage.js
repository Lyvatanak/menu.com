const products = [
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
localStorage.setItem('products',JSON.stringify(products));