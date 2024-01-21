const product = [
    //frapp
    {
        id:1,
        title:'BROWN FRAPP',
        minprice:4.35,
        image:'image  New/Brown Frapp.jpg'
    },
    {
        id:2,
        title:'MOCHA CHIP CREAM',
        minprice:4.55,
        image:'image  New/Mocha Chip Cream.jpg'
    },
    {
        id:3,
        title:'OREO GREEN TEA',
        minprice:4.25,
        image:'image  New/Oreo Green tea.jpg'
    },
    {
        id:4,
        title:'VANILA FRAPP',
        minprice:4.35,
        image:'image  New/Vanila Fraap.jpg'
    },
    //Hot
    {
        id:5,
        title:'CAFE LATTE',
        minprice:2.55,
        image:'image  New/Hot late.jpg'
    },
    {
        id:6,
        title:'HOT CHOCOLATE',
        minprice:2.45,
        image:'image  New/Hot cholate.jpg'
    },
    {
        id:7,
        title:'PHAM CAPPUCCINO',
        minprice:2.85,
        image:'image  New/Hot pham capuicno.jpg'
    },
    {
        id:7,
        title:'CAPPUCCINO', 
        minprice:3.65,
        image:'image  New/Hot capucino.jpg'
    },
    //Ice
    {
        id:8,
        title:'ICE CAFFE LATTE',
        minprice:2.85,
        image:'image  New/ice late.jpg'
    },
    {
        id:9,
        title:'ICE AMERICANO',
        minprice:2.65,
        image:'image  New/lce americhno.jpg'
    },
    {
        id:10,
        title:'LCED CAPPUCCINO',
        minprice:4.25,
        image:'image  New/lce capucino.jpg'
    },
    {
        id:11,
        title:'ICE GREEN TEA LATTE',
        minprice:4.55,
        image:'image  New/lce Green tea.jpg'
    },
    //Pastry
    {
        id:11,
        title:'PICNUT',
        minprice:2.15,
        image:'image  New/pichnut.jpg'
    },
    {
        id:12,
        title:'CROSONG',
        minprice:2.11,
        image:'image  New/crosong.jpg'
    },
    {
        id:13,
        title:'BANANA DENIS',
        minprice:1.75,
        image:'image  New/banana denis.jpg'
    },
    {
        id:14,
        title:'PENORESIN',
        minprice:2.35,
        image:'image  New/pianoresin.jpg'
    },
    //Cake
    {
        id:15,
        title:'SNOQEEN',
        minprice:3.85,
        image:'image  New/SnoQeen.jpg'
    },
    {
        id:16,
        title:'TIRAMISU',
        minprice:3.15,
        image:'image  New/tiramisu.jpg'
    },
    {
        id:17,
        title:'BLACK FORES',
        minprice:3.15,
        image:'image  New/black fores.jpg'
    },
    {
        id:18,
        title:'OPERA CAKE',
        minprice:3.45,
        image:'image  New/opera.jpg'
    },
    //Food_Past
    {
        id:19,
        title:'PRAWN TOM YUM LINUINE',
        minprice:5.51,
        image:'image  New/brown tongyam.jpg'
    },
    {
        id:20,
        title:'CABONARA SPAGHETI',
        minprice:4.95,
        image:'image  New/chabora.jpg'
    },
    {
        id:21,
        title:'KICKEN RAGU FETTUCCINE',
        minprice:5.52,
        image:'image  New/past.jpg'
    },
    {
        id:22,
        title:'BEET BOURUIGNON SPAGHETTI',
        minprice:4.95,
        image:'image  New/NEW.jpg'
    },
    //Food_salat
    {
        id:19,
        title:'CHIKEN SALSA SALSA',
        minprice:4.53,
        image:'image  New/checken salat.jpg'
    },
    {
        id:20,
        title:'ROASTED BEEF SALAD',
        minprice:4.55,
        image:'image  New/Roosbit salat.jpg'
    },
    {
        id:21,
        title:'TUNA NICOISE SALAD',
        minprice:4.52,
        image:'image  New/salate.jpg'
    },
    {
        id:22,
        title:'TUNA SALAD',
        minprice:4.51,
        image:'image  New/Tuna salat.jpg'
    },
];

localStorage.setItem('product',JSON.stringify(product));