 /* eslint-disable */

import { useAppSelector } from "../../components/redux";

function CheckOut() {
  const cart = useAppSelector((state) => state.cartReducer.cart);
  console.log(cart)
  
  return (
    <>
     <div className="flex justify-between py-4">
       <h1 className="text-xl text-purple-500">Check Out Page</h1>
       <button className="px-6 py-2 mx-5 font-medium text-white bg-purple-500 border rounded-md text-primary-400 focus:outline-none">Proceed to checkout</button>
     </div>
     <div className='grid grid-cols-3 gap-4'>
      {cart.map((v, i) => {
      return (
      <div key={i}>
      <div className="p-4 border border-purple-500">
                  <div className="flex">
                    <p className="col-span-2 font-semibold">ID:</p>
                    <p className="col-span-4">{v.id}</p>
                  </div>
                         <div className="flex">
                  <p className="col-span-2 font-semibold">Title:</p>
                  <p className="col-span-4">{v.title}</p>
                      </div>
        </div>
      </div>
      )})}
      </div>
   
 </>
  )
}

export default CheckOut;



