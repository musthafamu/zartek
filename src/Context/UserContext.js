import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [index]);

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  const fetchMenuCategories = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099');
      setCategory(response.data[0].table_menu_list);
    } catch (error) {
      console.error('Error fetching menu categories:', error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099');
      setItems(response.data[0].table_menu_list[index].category_dishes);
    } catch (error) {
      console.error('Error fetching menu categories:', error);
    }
  };

  const qtyIncrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.dish_id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
      )
    );
  };

  const qtyDecrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.dish_id === id && item.qty && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + (item.qty || 0), 0);
  };

  const value = {
    items,
    category,
    index,
    setIndex,
    qtyIncrease,
    qtyDecrease,
    getTotalQuantity,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
