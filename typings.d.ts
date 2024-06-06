/**Interfaces
 *
 * Interface for data types**: Ensuring interfaces of object.
 *
 **/

// types/Product.ts
export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: string[];
  origin: string;
  healthBenefit: string[];
  culinaryUses: string[];
  price: number;
  stock: number;
  images: string;
}

// types/Recipe.ts
export interface Recipe {
  _id: string;
  image: string;
  slug: string;
  title: string;
  description: string;
  ingredients: string[];
  method: string[];
}

// types/User.ts
export interface Address {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  role: "admin" | "user";
  shippingAddresses: Address[];
  orders: string[]; // Array of order IDs
}

// types/Order.ts
export interface OrderItem {
  product: string; // Product ID
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  user: string; // User ID
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

// types/BlogPost.ts
export interface BlogPost {
  _id: string;
  title: string;
  author: string;
  content: string;
  tags: string[];
  category: string;
  featuredImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
