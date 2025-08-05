var MyCards = [
    {
        "Image" : "http://127.0.0.1:5500/images/labubu.png",
        "Price" : 199,
        "Brand" : "Labubu"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/facewash.png",
        "Price" : 499,
        "Brand" : "Ocean"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/HairSerum.png",
        "Price" : 299,
        "Brand" : "Livon"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/CLips.png",
        "Price" : 199,
        "Brand" : "Yk"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Everyuth.png",
        "Price" : 299,
        "Brand" : "Everyuth"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Slippers.png",
        "Price" : 699,
        "Brand" : "Puma"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Shirt.png",
        "Price" : 499,
        "Brand" : "Philipines"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Saree.png",
        "Price" : 399,
        "Brand" : "Vishal"
    },
];

var Card = MyCards.map((ele) =>{
    return (`<div class="card">
                <div class="image-section">
                    <img src= ${ele.Image} alt="">
                </div>
                <div class="info-section">
                    <div class="price">Price: ${ele.Price}/-</div>
                    <div class="brand">Brand: ${ele.Brand}</div>
                </div>
            </div>`)
});
Card = Card.join(" ");
var parent = document.getElementsByClassName("card-container")[0];
parent.innerHTML = Card;