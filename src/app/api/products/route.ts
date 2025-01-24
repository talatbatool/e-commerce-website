import { NextResponse } from "next/server";

const products=[
    {

        id:1,
        name:"chesyPizza",
        price:500,
        image:"/pizza15.jpg"
    },
    {
        id:2,
        name:"chesy pizza",
        price:850,
        image:"/pizza10.jpg"
    },



    {
        id:3,
        name:"vegies pizza",
        price:900,
        image:"/pizza6.jpg"
    },



    {
        id:4,
        name:"italain pizza",
        price:700,
        image:"/pizza4.jpg"
    },





    {
        id:5,
        name:"bbq pizza",
        price:900,
        image:"/pizza2.jpg"
    },


    {
        id:6,
        name:"fajita pizza",
        price:800,
        image:"/pizza1.jpg"
    },
]

export function GET() {
    console.log(products)
    return NextResponse.json(products);
}