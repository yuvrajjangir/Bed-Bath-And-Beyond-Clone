var sofaData =[
    {
        image1:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/8b640e7082b9bb5cfd88637d81c118e240f727ff/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image2:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/02c7501419a410d853cca83fad2fb685456bf44f/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image3:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/dcd39ddcfba9dd9628ec95fb364e616b271d0225/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image4:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/41250561a1527541e727879d9f84bac30c0adc31/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image5:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/b32bf50b85c4315797f5afa7a938ab5b649f5251/QOMOTOP-Oversize-Power-Lift-Recliner-Chair-for-Elderly%2C-Safe-Slow-Lift-Motor.jpg?imwidth=480&impolicy=medium",

      sale: "Sale starts atCAD$568.16",
    name: "Futzca ​Sectional Sofa Couch, 3 Seat L Shaped Sofa with Removable Pillows",

    price: "$ 568",
    shipping:"Free Shipping",
    },
    {
        image1:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/e8358dc73a109ee8f71cfb12856bd81284f8d292/Futzca-%E2%80%8BSectional-Sofa-Couch%2C-3-Seat-L-Shaped-Sofa-with-Removable-Pillows.jpg?imwidth=480&impolicy=medium",
    image2:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/7bc1aa98734dd0cc8696084dcc4ed97c5034b8cc/Futzca-%E2%80%8BSectional-Sofa-Couch%2C-3-Seat-L-Shaped-Sofa-with-Removable-Pillows.jpg?imwidth=480&impolicy=medium",
    image3:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/a3a5a6cc4975501cecdafc022120e9283c0e57c3/Futzca-%E2%80%8BSectional-Sofa-Couch%2C-3-Seat-L-Shaped-Sofa-with-Removable-Pillows.jpg?imwidth=480&impolicy=medium",
    image4:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/eb169f05a449bf37526cb959fd46c404e0d43032/Futzca-%E2%80%8BSectional-Sofa-Couch%2C-3-Seat-L-Shaped-Sofa-with-Removable-Pillows.jpg?imwidth=480&impolicy=medium",
    image5:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/8ee3003107d3374fa9fe96892173c4f9b52f777e/Futzca-%E2%80%8BSectional-Sofa-Couch%2C-3-Seat-L-Shaped-Sofa-with-Removable-Pillows.jpg?imwidth=480&impolicy=medium",

      sale: "Sale starts atCAD$568.16",
      name: "Futzca ​Sectional Sofa Couch, 3 Seat L Shaped Sofa with Removable Pillows",
  
      price: "$ 568",
      shipping:"Free Shipping",
    },
    {
        image1:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/8b640e7082b9bb5cfd88637d81c118e240f727ff/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image2:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/02c7501419a410d853cca83fad2fb685456bf44f/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image3:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/dcd39ddcfba9dd9628ec95fb364e616b271d0225/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image4:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/41250561a1527541e727879d9f84bac30c0adc31/K925-Power-Lift-Chair.jpg?imwidth=480&impolicy=medium",
    image5:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/b32bf50b85c4315797f5afa7a938ab5b649f5251/QOMOTOP-Oversize-Power-Lift-Recliner-Chair-for-Elderly%2C-Safe-Slow-Lift-Motor.jpg?imwidth=480&impolicy=medium",

      sale: "Starts at CAD $568.16",
      name: "Futzca ​Sectional Sofa Couch, 3 Seat L Shaped Sofa with Removable Pillows",
  
      price: "$ 568",
      shipping:"Free Shipping",
     
    },
    
];

display(sofaData);

function display(array){

var parent =document.querySelector("#product-page-item-div");
parent.innerHTML = "";

array.forEach(function(element,index){

    var div = document.createElement("div");

    // div.addEventListener("click",function(){
 // window.location.assign("/productPage/kidsData/kids.html")
    // });
    var img =document.createElement("img");
    img.setAttribute("id", "img-img");
    img.setAttribute("src", element.image1);
    img.setAttribute("alt", index);

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");
    imgDiv.append(img);

    imgDiv.addEventListener("click", function () {
        var itemObj = {
          imageURL1: element.image1,
          imageURL2: element.image2,
          imageURL3: element.image3,
          imageURL4: element.image4,
          imageURL5: element.image5,
  
          name: element.name,
          sale: element.sale,
          freeship : element.shipping,
          price: parseInt(element.strikedoffprice.replace("Rs ", "")),

         
          
        };
        localStorage.setItem("itemDetails", JSON.stringify(itemObj));
})
var h3 = document.createElement("h3");
h3.textContent = element.sale;

var ship = document.createElement("p");
ship.textContent = element.shipping;

var namePriceDiv = document.createElement("p");
   
    namePriceDiv.textContent = element.name;

div.append(imgDiv, h3, namePriceDiv,ship);

parent.append(div);
})
};