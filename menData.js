const container=document.querySelector(".product_container");
const product_card=document.querySelector(".product_card");
let mensData=[
    {
        name:"Men  Round Neck T-shirt",
        category:"T-Shirts",	
        description:"DILLINGER Men Grey Printed Round Neck T Shirt,  DILLINGER, Tshirts, Topwear, Apparel, Apparel for Men, Buy DILLINGER Men Grey Printed Round Neck T Shirt Online in India, Buy Tshirts at best price	100% cotton",	
        img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6609398/2019/1/30/9e5ac30f-08c4-4fd2-8546-d758d1b5c1f41548843950865-DILLINGER-Men-Grey-Printed-Round-Neck-T-shirt-71015488439477-1.jpg",	
        price:329,
        color:"grey",
        gender:"Men",
        neck:"Round",
        brand:"DILLINGER",
        fabric:"100% cotton",
        discount:38,
        },
        {
            name:"Men Polo Collar T-shirt",
            category:"T-Shirts",	
            description:"U.S. Polo Assn. Men Orange Solid Polo Collar T Shirt,  U.S. Polo Assn., Tshirts, Topwear, Apparel, Apparel for Men, Buy U.S. Polo Assn. Men Orange Solid Polo Collar T Shirt Online in India, Buy Tshirts at best price 100% cotton",
            img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2365526/2018/2/9/11518169271894-US-Polo-Assn-Orange-Solid-Polo-T-shirt-4301518169271743-1.jpg",
            price:1499,
            color:"Orange",
            gender:"Men",
            neck:"Collar",
            brand:"U.S. Polo Assn.",
            fabric:"100% cotton",
            discount:20,

            },
            {
                name:"Polo T-Shirt",
                category:"T-Shirts",
                description:"Peach Polo T Shirt,  ADIDAS, Tshirts, Topwear, Apparel, Apparel for Men, Buy Peach Polo T Shirt Online in India, Buy Tshirts at best price",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/11/24/68dcdb22-5675-4f13-9061-74a7dc78fa6d1543038800613-1.jpg",			
                price:1049,
                color:"Peach",
                gender:"Men",
                neck:"Collar",
                brand:"ADIDAS",
                fabric:"cotton",
                discount:35,

                },
            {               
                name:" White Round Neck T-shirt",
                category:"T-Shirts",
                description: "Roadster Men White Printed Round Neck T Shirt,  Roadster, Tshirts, Topwear, Apparel, Apparel for Men, Buy Roadster Men White Printed Round Neck T Shirt Online in India,Buy Tshirts at best price Cotton ",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1824369/2017/5/5/11493980166188-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-1.jpg",
                price:419,
                color:"White",
                gender:"Men",
                neck:"Round",
                brand:"Roadster",
                fabric:"cotton",
                discount:18,


            },
            {               
                name:"Grey Henley Neck T-shirt",
                category:"T-Shirts",
                description: "Roadster Men Navy Solid Henley Neck T Shirt,  Roadster, Tshirts, Topwear, Apparel, Apparel for Men, Buy Roadster Men Navy Solid Henley Neck T Shirt Online in India, Buy Tshirts at best price ",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1996756/2018/11/12/df35e7e7-4619-4e78-b64f-c9653f89f2211542017043272-Roadster-Men-Navy-Solid-Henley-Neck-T-shirt-5611542017043106-1.jpg",
                price:249,
                color:"grey",
                gender:"Men",
                neck:"Henley",
                brand:"Roadster",
                fabric:"60% cotton, 40% polyester",
                discount:5,

            },
{            name:"Men Blue Polo T-shirt",
             category:"T-Shirts",
             description: "U.S. Polo Assn. Men Blue Printed Polo Collar T Shirt,  U.S. Polo Assn., Tshirts, Topwear, Apparel, Apparel for Men, Buy U.S. Polo Assn. Men Blue Printed Polo Collar T Shirt Online in India, Buy Tshirts at best price",
             price:1379,
             img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7024714/2018/10/4/70a85b8a-43fd-4508-a242-26f8cf29913e1538650772941-US-Polo-Assn-Men-Blue-Printed-Polo-Collar-T-shirt-2671538650-1.jpg",
                color:"Blue",
                gender:"Men",
                neck:"Collar",
                brand:"U.S. Polo Assn.",
                fabric:"100% cotton",
                discount:10,
},
{
    name:"Jeans Men White T-shirt",
    category:"T-Shirts",
    description: "Calvin Klein Jeans Men White Printed Round Neck T Shirt,  Calvin Klein Jeans, Tshirts, Topwear, Apparel, Apparel for Men, Buy Calvin Klein Jeans Men White Printed Round Neck T Shirt Online in India, Buy Tshirts at best price",
             price:2449,
             img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7766756/2018/11/28/fcacc652-f449-476f-89c0-1450d17ffc9c1543388471585-Calvin-Klein-Jeans-Men-Tshirts-5621543388470189-1.jpg",
                color:"White",
                gender:"Men",
                neck:"Round",
                brand:"U.S. Polo Assn.",
                fabric:"100% cotton",
                discount:12,
},
{
    name:"Allen Solly Solid T-shirt",
    category:"T-Shirts",
    description:"Allen Solly Sea Green Collar Neck  Polo T Shirt,  ADIDAS, Tshirts,",
    price:1234,
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7812367/2018/12/8/5c8940d1-cb9a-44a1-ad5b-267186b7f7081544259175329-Allen-Solly-Men-Teal-Solid-Polo-Collar-T-shirt-3631544259174-1.jpg",
    color:"Green",
    gender:"Men",
    neck:"Collar",
    brand:"Allen Solly",
    fabric:"100% polyester",
    discount:15,
},
{
    name:"Lacoste Blue T-shirt",
    category:"T-Shirts",
    description:"Lacoste Men Blue Printed Round Neck T-shirt 100% Cotton",
    price:4300,
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/b3c8495b-a6db-41fc-9a64-5f3c568352001548130390356-1.jpg",

    color:"Blue",
    gender:"Men",
    neck:"Round",
    brand:"Lacoste",
    fabric:"100% Cotton",
    discount:5,

},
{
    name:"Levis Striped T-shirt",
    category:"T-Shirts",
    description:"Levis Men Orange Striped Round Neck T-shirt 70% Cotton 30% Mix-blend",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6841037/2018/8/28/b3fe90a4-7613-4d72-9045-b6d042328ede1535448696890-Levis-Men-Rust-Striped-Round-Neck-T-shirt-5571535448696713-1.jpg",
    price:4999,
    color:"Orange",
    gender:"Men",
    neck:"Round",
    brand:"Levis",
    fabric:"70% Cotton 30% Mix-blend",
    discount:14,

},

{
    name:"Peter England Men Formal Shirt",
    category:"Shirts",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2481947/2018/2/26/11519650028346-Peter-England-Men-Green-Regular-Fit-Self-Design-Formal-Shirt-5391519650028136-1.jpg",
    price:999,
    color:"Green",
    gender:"Men",
    brand:"Peter England",
    fabric:"70% Cotton 30% Mix-blend",
    discount:40,
    collar:"Collar",

},
{
    name:"Peter England Men Purple Shirt",
    category:"Shirts",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2481823/2018/6/27/7bc59ee0-e79c-4205-8473-159f50b37eff1530099540110-Peter-England-Men-Shirts-1831530099539931-1.jpg",
    price:1099,
    color:"Purple",
    gender:"Men",
    brand:"Peter England",
    fabric:"70% Cotton 30% Mix-blend",
    discount:16,
    collar:"Collar",


},

 ]
 let data=[...mensData]

mensData.forEach((val)=>{
        const card=document.createElement("div");
        const image=document.createElement("img");
        const brand=document.createElement("p");
        const name=document.createElement("p");
        const priceDiv=document.createElement("div");
        const price=document.createElement("span");
        const strikePrice=document.createElement("span");
        const discount=document.createElement("span");
        const wishList=document.createElement("button");
    
        wishList.style.display="none";
        wishList.textContent="Wish List";
        wishList.classList.add("wishList");
        card.setAttribute("class", "product_card");
        image.setAttribute("src",val.img_url);
        name.textContent=val.name;
        price.textContent=`Rs.${val.price}`;
        brand.textContent=val.brand;
        strikePrice.textContent=`Rs. ${Math.round(val.price + val.price*(val.discount/100))}`;
        discount.textContent=`(${val.discount} % OFF)`;
        
        priceDiv.append(price,strikePrice,discount);
        card.append(image,wishList,brand,name,priceDiv);
        container.append(card);
       
        filterColor(val,container,card);
        filterCollar(val,container,card);
        filterBrand(val,container,card);
        filterCategory(val,container,card);
        

});
function ckChange(ckType) {
                var checkboxes = document.querySelectorAll('[name="color"]');
                
                checkboxes.forEach(function (checkbox) {
                  if (!ckType.checked) {
                    checkbox.disabled = false;
                  } else {
                    if (!checkbox.checked) {
                      checkbox.disabled = true;
                    } else {
                      checkbox.disabled = false;
                    }
                  }
                 }
               
)};
function ckCollar(ckType) {
var checkboxes = document.querySelectorAll('[name="collar"]');
checkboxes.forEach(function (checkbox) {
if (!ckType.checked) {
  checkbox.disabled = false;
                  } else {
                    if (!checkbox.checked) {
                      checkbox.disabled = true;
                    } else {
                      checkbox.disabled = false;
                    }
                  }
                 }
               
)};
function ckBrand(ckType) {
    var checkboxes = document.querySelectorAll('[name="brand"]');
    checkboxes.forEach(function (checkbox) {
    if (!ckType.checked) {
      checkbox.disabled = false;
                      } else {
                        if (!checkbox.checked) {
                          checkbox.disabled = true;
                        } else {
                          checkbox.disabled = false;
                        }
                      }
                     }
                   
)};  
function ckCategories(ckType) {
        let checkboxes = document.querySelectorAll('[name="categories"]');
        checkboxes.forEach(function (checkbox) {
        if (!ckType.checked) {
          checkbox.disabled = false;
                          } else {
                            if (!checkbox.checked) {
                              checkbox.disabled = true;
                            } else {
                              checkbox.disabled = false;
                            }
                          }
                         }
                       
)};       
           



function filterColor(val,container,card){
    const checkBoxClr=document.querySelectorAll(".checkbox"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        // console.log(selectedColor);
        if(checkbox.checked && selectedColor.toLowerCase()==val.color.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
            // checkBoxClr.setAttribute.disabled=false;

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterCollar(val,container,card){
    const checkBoxClr=document.querySelectorAll(".collarChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        // console.log(selectedColor);
        if(checkbox.checked && selectedColor.toLowerCase()==val.neck.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
            // checkBoxClr.setAttribute.disabled=false;

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterBrand(val,container,card){
    const checkBoxClr=document.querySelectorAll(".brandChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        // console.log(selectedColor);
        if(checkbox.checked && selectedColor.toLowerCase()==val.brand.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
            // checkBoxClr.setAttribute.disabled=false;

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterCategory(val,container,card){
    const checkBoxClr=document.querySelectorAll(".categoriesChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        // console.log(selectedColor);
        if(checkbox.checked && selectedColor.toLowerCase()==val.category.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
            // checkBoxClr.setAttribute.disabled=false;

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}

function sortByBetterDiscount(a, b) {
  return b.discount - a.discount;
}
function sortByHighToLow(a, b) {
  return b.price - a.price;
}
function sortByLowToHigh(a, b) {
  return a.price - b.price;
}
const sortDropdown = document.getElementById('sort');
sortDropdown.addEventListener('change', function displaySortedProducts() {
  const container=document.querySelector(".product_container");
// const product_card=document.querySelector(".product_card");

  const sort = document.getElementById('sort');
  const sortValue = sort.value;

  if (sortValue.toLowerCase() === 'discount') {
   mensData.sort(sortByBetterDiscount);
  } else if (sortValue.toLowerCase() === 'high'){
    mensData.sort(sortByHighToLow);
  }else if(sortValue.toLowerCase() === 'low'){
      mensData.sort(sortByLowToHigh);
  }
  else{
     mensData=[...data]; 
  }
  container.innerHTML="";
  mensData.forEach((val)=>{
    const card=document.createElement("div");
    const image=document.createElement("img");
    const brand=document.createElement("p");
    const name=document.createElement("p");
    const priceDiv=document.createElement("div");
    const price=document.createElement("span");
    const strikePrice=document.createElement("span");
    const discount=document.createElement("span");
    // const wishList=document.createElement("button");
    const AddToCart=document.createElement("button");

    const btnDiv=document.createElement("div");
    btnDiv.classList.add("hiddenDiv");
    image.classList.add("prod_img");

    AddToCart.textContent="Add To Cart";
    AddToCart.classList.add("btns");
    // wishList.textContent="Wish List";
    // wishList.classList.add("btns");
    btnDiv.append(AddToCart);
    card.setAttribute("class", "product_card");
    image.setAttribute("src",val.img_url);
    name.textContent=val.name;
    price.textContent=`Rs.${val.price}`;
    brand.textContent=val.brand;
    strikePrice.textContent=`Rs. ${Math.round(val.price + val.price*(val.discount/100))}`;
    discount.textContent=`(${val.discount} % OFF)`;
    
    priceDiv.append(price,strikePrice,discount);
    card.append(image,btnDiv,brand,name,priceDiv);

    container.append(card);
   
    filterColor(val,container,card);
    filterCollar(val,container,card);
    filterBrand(val,container,card);
    filterCategory(val,container,card);
    console.log(val.price)

});
console.log(sortValue);
});