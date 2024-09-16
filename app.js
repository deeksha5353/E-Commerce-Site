const Wrapper=document.querySelector(".sliderWrapper");

const menuItem = document.querySelectorAll(".menuItem");

const products=[
    {
        id:1,
        title:"Ginger By Lifestyle",
        price:1499,
    },
    {
        id:2,
        title:"RedTape",
        price:1588,
    },
    {
        id:3,
        title:"The White Pole",
        price:1999,
    },
    {
        id:4,
        title:"Puma",
        price:2799,
    },
    {
        id:5,
        title:"Yoho",
        price: 1899,
    },
];
let choosenProduct=products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductSizes=document.querySelectorAll(".size");

menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        Wrapper.style.transform=`translateX(${-100*index}vw)`;

        choosenProduct=products[index];

        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="₹"+choosenProduct.price;
        currentProductImg.src=choosenProduct[index].currentProductImg;

    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="wheat"
            size.style.color="gray"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})

close.addEventListener("click",()=>{
    payment.style.display="none";
})

