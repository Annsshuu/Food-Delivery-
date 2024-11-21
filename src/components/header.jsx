// src/components/Header.jsx
import React from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <MapPin className="text-green-500 mr-2" />
        <span>Deliver to: Current Location</span>
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingCart />
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">
          Sign In
        </button>
      </div>
    </header>
  );
};

// src/components/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  const cuisines = ['Pizza', 'Burger', 'Sushi', 'Salad', 'Indian'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <Search className="text-gray-500 mr-3" />
        <input 
          type="text" 
          placeholder="Search for restaurants or cuisines" 
          className="w-full bg-transparent focus:outline-none"
        />
      </div>
      <div className="flex justify-between mt-4 overflow-x-auto">
        {cuisines.map((cuisine) => (
          <button 
            key={cuisine} 
            className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition whitespace-nowrap mr-2"
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};

// src/components/RestaurantCard.jsx
import React, { useState } from 'react';
import { Star, Clock, Truck, Heart } from 'lucide-react';

export const RestaurantCard = ({ name, cuisine, rating, deliveryTime }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
      <div className="relative">
        <img 
          src={`/api/placeholder/400/250?text=${name}`} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/70 rounded-full p-2"
        >
          <Heart 
            className={`${isFavorite ? 'text-red-500 fill-current' : 'text-gray-500'}`} 
            size={24} 
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star size={20} className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 mt-1">{cuisine}</p>
        <div className="flex items-center text-gray-600 mt-2 space-x-3">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{deliveryTime} min</span>
          </div>
          <div className="flex items-center">
            <Truck size={16} className="mr-1" />
            <span>Free Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// src/components/RecommendedDishes.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const RecommendedDishes = () => {
  const dishes = [
    { 
      name: 'Margherita Pizza', 
      restaurant: 'Pizza Palace', 
      price: '$12.99',
      image: 'pizza'
    },
    { 
      name: 'Chicken Burger', 
      restaurant: 'Burger Barn', 
      price: '$9.99',
      image: 'burger'
    },
    { 
      name: 'Sushi Combo', 
      restaurant: 'Sushi Spot', 
      price: '$18.99',
      image: 'sushi'
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Dishes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <div 
            key={dish.name} 
            className="bg-white rounded-lg shadow-md p-3 text-center"
          >
            <img 
              src={`/api/placeholder/200/200?text=${dish.name}`} 
              alt={dish.name} 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="font-bold">{dish.name}</h4>
            <p className="text-gray-500 text-sm">{dish.restaurant}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold">{dish.price}</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded-full">
                Add
                <ShoppingCart className="inline ml-2" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// src/components/FoodDeliveryApp.jsx
import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { RestaurantCard } from './RestaurantCard';
import { RecommendedDishes } from './RecommendedDishes';

const FoodDeliveryApp = () => {
  const restaurants = [
    { 
      name: 'Pizza Palace', 
      cuisine: 'Italian, Pizza', 
      rating: 4.5, 
      deliveryTime: 30 
    },
    { 
      name: 'Burger Barn', 
      cuisine: 'American, Burgers', 
      rating: 4.2, 
      deliveryTime: 25 
    },
    { 
      name: 'Sushi Spot', 
      cuisine: 'Japanese, Sushi', 
      rating: 4.7, 
      deliveryTime: 35 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <SearchBar />
        <h2 className="text-2xl font-bold mb-4">Popular Restaurants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.name}
              {...restaurant}
            />
          ))}
        </div>
        <RecommendedDishes />
      </div>
    </div>
  );
};

export default FoodDeliveryApp;
