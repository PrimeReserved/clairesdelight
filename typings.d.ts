/**Interfaces
 *
 * Interface for data types**: Ensuring interfaces of object.
 *
 **/

type Base = {
  _createAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updateAt?: string
}

// types/Product.ts
export interface Product extends Base {
  name: string;
  slug: string;
  description: string;
  category: string[];
  origin: string;
  healthBenefit: string[];
  culinaryUses: string[];
  price: number;
  stock: number;
  images: string | null;
}

// types/Recipe.ts
export interface Recipe extends Base {
  image: string;
  slug: string;
  title: string;
  description: string;
  ingredients: string[];
  method: string[];
}

// types/User.ts
export interface Address extends Base {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User extends Base {
  email: string;
  password: string;
  role: "admin" | "user" | "customer";
  shippingAddresses: Address[];
  orders: string[]; // Array of order IDs
}

// types/Order.ts
export interface OrderItem extends Base {
  product: string; // Product ID
  quantity: number;
  price: number;
}

export interface Order extends Base {
  user: string; // User ID
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: string;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

// types/BlogPost.ts
export interface BlogPost extends Base {
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

// types/UpcomingEvents.ts
export interface UpcomingEvent extends Base {
  slug?: string;
  name: string;
  summary: string;
  description: string;
  date: string;
  start: string;
  end: string;
  thumbnail: Image;
  livestreamURL: string;
  body: BlockContent;
}