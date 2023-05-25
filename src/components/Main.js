import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

function Main() {
  const { items, qty,qtyIncrease,qtyDecrease } = useContext(UserContext);
  console.log(items);

  return (
    <div className="overflow-x-auto  px-2 ">
      <div className="flex flex-col  ">
        {items?.map((i) => {
           const {  qty=0 } = i;
          return (
            <div key={i.dish_id} className="flex justify-between border-y items-start ">
              <div className="flex items-start ">
                <div
                  className={
                    i.dish_Availability
                      ? 'border mt-2 mr-1 w-fit p-[2px] border-green-600 flex-shrink-0'
                      : 'border w-fit mt-2 mr-1 p-[2px] border-red-600 flex-shrink-0'
                  }
                > 
                  <div
                    className={
                      i.dish_Availability
                        ? 'bg-green-600 w-[10px] h-[10px] rounded-sm'
                        : 'bg-red-600  w-[10px] h-[10px] rounded-sm'
                    }
                  ></div>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold">{i.dish_name}</h1>
                  <h1 className="font-bold">{i.dish_currency}</h1>
                  <h1 className="font-serif max-w-sm md:max-w-xl">{i.dish_description}</h1>

                  {i.dish_Availability ? (
                    <div className='bg-green-500 rounded-md max-w-[100px] max-h-[30px] flex items-center justify-evenly text-white '>
                      <button onClick={()=>qtyDecrease(i.dish_id)} className='text-2xl'>-</button>
                      <p>{qty}</p>
                      <button className='text-2xl ' onClick={()=>qtyIncrease(i.dish_id)} >+</button>
                    </div>
                  ) : (
                    <div className="text-red-500 text-sm">
                      <p>Not available</p>
                    </div>
                  )}

                  {i.addonCat.length > 0 ? (
                    <div>
                      <p className="text-red-500">Customization available</p>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>

              <div className="flex items-center md:gap-10">
                <div className="flex mr-2 gap-2">
                  <p className="text-sm">{i.dish_calories}</p>
                  <p className="font-bold text-sm">Calories</p>
                </div>
                <img className="sm:w-[80px]  max-w-[70px] max-h-[80px] sm:h-[100px]" src={i.dish_image} alt="dish" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main