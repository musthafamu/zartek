import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';

function Category() {
  const { category,setIndex } = useContext(UserContext);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    // Set the first item as the initial selected item
    if (category.length > 0) {
      setSelectedItem(category[0]);
      
    }
  }, [category]);

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setIndex(index)
  };


  return (
    <div className="overflow-x-auto pt-4">
      <div className="relative">
        <ul className="flex w-full whitespace-nowrap overflow-x-scroll sm:justify-evenly gap-10">
          {category.map((item, index) => (
            <li
              className={`duration-200 pb-3 ${
                selectedItem === item ? 'text-pink-600 border-b-2 border-pink-600 selected-item' : 'text-black'
              }`}
              key={index}
              onClick={() => handleItemClick(item, index)}
              style={{
                borderBottom: `2px solid ${selectedItem === item ? '' : 'transparent'}`,
                cursor: 'pointer',
              }}
            >
              {item.menu_category}
            </li>
          ))}
        </ul>
        <div className="absolute left-0 right-0 sm:bottom-[26%] bottom-[15%]  h-[2px] bg-gray-300/60 shadow "></div>
      </div>
    </div>
  );
}

export default Category;
