import React, { useState } from 'react'

function AddCard() {
    const products = [
  { id: 1, productName: "Laptop", price: 50000 },
  { id: 2, productName: "Smartphone", price: 25000 },
  { id: 3, productName: "Tablet", price: 15000 },
  { id: 4, productName: "Smartwatch", price: 8000 },
  { id: 5, productName: "Keyboard", price: 1500 },
  { id: 6, productName: "Mouse", price: 700 },
  { id: 7, productName: "Monitor", price: 12000 },
  { id: 8, productName: "Printer", price: 7000 },
  { id: 9, productName: "Webcam", price: 2000 },
  { id: 10, productName: "Speakers", price: 3000 },
  { id: 11, productName: "Headphones", price: 2500 },
  { id: 12, productName: "Microphone", price: 3500 },
  { id: 13, productName: "Charger", price: 1200 },
  { id: 14, productName: "Power Bank", price: 1800 },
  { id: 15, productName: "Router", price: 2500 },
  { id: 16, productName: "USB Cable", price: 300 },
  { id: 17, productName: "HDMI Cable", price: 500 },
  { id: 18, productName: "External Hard Drive", price: 6000 },
  { id: 19, productName: "SSD", price: 4500 },
  { id: 20, productName: "RAM", price: 3000 },
  { id: 21, productName: "Graphics Card", price: 15000 },
  { id: 22, productName: "Motherboard", price: 10000 },
  { id: 23, productName: "Processor", price: 20000 },
  { id: 24, productName: "Cooling Fan", price: 1200 },
  { id: 25, productName: "Projector", price: 18000 },
  { id: 26, productName: "TV", price: 30000 },
  { id: 27, productName: "Smart Light", price: 1200 },
  { id: 28, productName: "Smart Plug", price: 900 },
  { id: 29, productName: "VR Headset", price: 22000 },
  { id: 30, productName: "Game Console", price: 40000 },
  { id: 31, productName: "Joystick", price: 2500 },
  { id: 32, productName: "Tripod", price: 1200 },
  { id: 33, productName: "Ring Light", price: 1800 },
  { id: 34, productName: "Camera", price: 35000 },
  { id: 35, productName: "Lens", price: 15000 },
  { id: 36, productName: "Memory Card", price: 1000 },
  { id: 37, productName: "Card Reader", price: 400 },
  { id: 38, productName: "Drone", price: 50000 },
  { id: 39, productName: "Smart Glasses", price: 8000 },
  { id: 40, productName: "Fitness Band", price: 2500 },
  { id: 41, productName: "Electric Kettle", price: 1700 },
  { id: 42, productName: "Air Purifier", price: 9000 },
  { id: 43, productName: "WiFi Repeater", price: 1500 },
  { id: 44, productName: "Laptop Stand", price: 1000 },
  { id: 45, productName: "Mobile Stand", price: 300 },
  { id: 46, productName: "Pen Drive", price: 600 },
  { id: 47, productName: "Bluetooth Adapter", price: 800 },
  { id: 48, productName: "CD/DVD Drive", price: 2500 },
  { id: 49, productName: "NAS Storage", price: 35000 },
  { id: 50, productName: "Server Rack", price: 45000 },
];

  const [addCardItem, setaddCardItem] = useState([]);

  const addcard= (product)=>{
     const existing = addCardItem.find(items => items.id == product.id);
     if(existing){
        const upadteCard = addCardItem.map(items => 
            items.id === product.id ? {...items, qut:items.qut + 1} : items
        );
        setaddCardItem(upadteCard);
     }else{
        setaddCardItem([...addCardItem, {...product, qut:1}])
     }
  };

  const toalprice = addCardItem.reduce((acc, item) => acc + item.price * item.qut, 0);

  return (
    <>
    <div className='flex flex-wrap mt-5 gap-3'>
      { products.map((items)=> (
        
        <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg" key={items.id}>
    <div class="relative">
        <img class="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/>
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-medium mb-2">{items.productName}</h3>
        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
            vel eros fermentum faucibus sit amet euismod lorem.</p>
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg">${items.price}</span>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded " onClick={()=>addcard(items)}>
        addtocard
      </button>
        </div>
    </div>
</div> 


      ))}

      </div>

<h1 className="text-2xl font-bold mt-10 mb-4">🛒 Add Cart Items List</h1>

{addCardItem.length === 0 ? (
  <p className="text-red-600 text-lg font-medium">⚠️ Please add items to cart</p>
) : (
  <div className="space-y-4">
    {addCardItem.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between border p-4 rounded-md shadow-sm hover:shadow-md transition"
      >
        <div>
          <h2 className="font-semibold text-lg">{item.productName}</h2>
          <p className="text-gray-600">₹{item.price} x {item.qut}</p>
          <p className="text-sm text-green-600 font-medium">Total: ₹{item.qut * item.price}</p>
        </div>

        <div className="flex gap-2 items-center">
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-lg">+</button>
          <span className="text-md font-semibold">{item.qut}</span>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-lg">-</button>
        </div>
      </div>
    ))}
  </div>
)}

<h1>total{toalprice}</h1>

    
    </>
  )
}

export default AddCard