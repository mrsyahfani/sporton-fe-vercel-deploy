"use client";

import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    qty:5,
    price: 230000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    qty:5,
    price: 400000,
    imgUrl: "product-4.png",
  },
];

export default function CartItems() {

    const {push} = useRouter();

    const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const payment = () => {

  }

    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-[300px]">
                 {
                cartList.map((item, index) => (
                    <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
                ))
            }
            </div>
            <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          className="w-full mt-4 p-2" onClick={() => push("/payment")}
        >
          <FiCreditCard /> Proceed to Payment
        </Button>
            </div>
        </CardWithHeader>
    )
}