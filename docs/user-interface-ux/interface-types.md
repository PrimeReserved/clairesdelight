# Interfaces 

- **Interface for data types**: Ensuring interfaces of object.

```typescript
// types/Product.ts
export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  medicinalProperties: string[];
  culinaryUses: string[];
  price: number;
  stock: number;
  images: string[];
}
```

```typescript
// types/User.ts
export interface Address {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
```

```typescript
export interface User {
  _id: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  shippingAddresses: Address[];
  orders: string[]; // Array of order IDs
}
```

```typescript
// types/Order.ts
export interface OrderItem {
  product: string; // Product ID
  quantity: number;
  price: number;
}
```

```typescript
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
```

```typescript
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
```