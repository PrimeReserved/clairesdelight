# Spice Shop API Documentation

Welcome to the Spice Shop API documentation. This API provides endpoints to manage spice products in the spice shop. You can use these endpoints to perform CRUD operations on spice products, such as fetching all spices, fetching a single spice by ID, adding a new spice, updating an existing spice, and deleting a spice.

## Base URL

```
https://http://localhost:3000/api/spices
```

## Authentication

Authentication is required for certain endpoints. The API currently supports API key authentication. Include your API key in the request headers as follows:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Get All Spices

#### Request

```
GET /api/spices
```

#### Response

```json
[
  {
    "_id": "664c907badadb85d59602152",
    "name": "Aloe Vera",
    "description": "A succulent plant species of the genus Aloe.",
    "category": "Medicinal Plant",
    "origin": "North Africa",
    "medicinalProperties": ["Heals burns", "Improves digestive health", "Moisturizes skin"],
    "culinaryUses": ["Smoothies", "Salads", "Juices"],
    "price": 10.99,
    "stock": 50,
    "images": ["https://example.com/aloe_vera1.jpg", "https://example.com/aloe_vera2.jpg"]
  },
  // More spice objects...
]
```

### Get Single Spice

#### Request

```
GET /api/spices/:id
```

#### Response

```json
{
  "_id": "664c907badadb85d59602152",
  "name": "Aloe Vera",
  "description": "A succulent plant species of the genus Aloe.",
  "category": "Medicinal Plant",
  "origin": "North Africa",
  "medicinalProperties": ["Heals burns", "Improves digestive health", "Moisturizes skin"],
  "culinaryUses": ["Smoothies", "Salads", "Juices"],
  "price": 10.99,
  "stock": 50,
  "images": ["https://example.com/aloe_vera1.jpg", "https://example.com/aloe_vera2.jpg"]
}
```

### Add New Spice

#### Request

```
POST /api/spices
```

```json
{
  "name": "New Spice",
  "description": "Description of the new spice.",
  "category": "Category of the new spice",
  "origin": "Origin of the new spice",
  "medicinalProperties": ["Property 1", "Property 2"],
  "culinaryUses": ["Use 1", "Use 2"],
  "price": 9.99,
  "stock": 20,
  "images": ["https://example.com/new_spice1.jpg", "https://example.com/new_spice2.jpg"]
}
```

#### Response

```json
{
  "message": "Spice added successfully",
  "spice": {
    "_id": "new_spice_id",
    "name": "New Spice",
    "description": "Description of the new spice.",
    "category": "Category of the new spice",
    "origin": "Origin of the new spice",
    "medicinalProperties": ["Property 1", "Property 2"],
    "culinaryUses": ["Use 1", "Use 2"],
    "price": 9.99,
    "stock": 20,
    "images": ["https://example.com/new_spice1.jpg", "https://example.com/new_spice2.jpg"]
  }
}
```

### Update Spice

#### Request

```
PUT /api/spices/:id
```

```json
{
  "name": "Updated Spice Name",
  "description": "Updated description of the spice.",
  "price": 12.99,
  "stock": 30
}
```

#### Response

```json
{
  "message": "Spice updated successfully",
  "updatedSpice": {
    "_id": "updated_spice_id",
    "name": "Updated Spice Name",
    "description": "Updated description of the spice.",
    "category": "Category of the spice",
    "origin": "Origin of the spice",
    "medicinalProperties": ["Property 1", "Property 2"],
    "culinaryUses": ["Use 1", "Use 2"],
    "price": 12.99,
    "stock": 30,
    "images": ["https://example.com/updated_spice1.jpg", "https://example.com/updated_spice2.jpg"]
  }
}
```

### Delete Spice

#### Request

```
DELETE /api/spices/:id
```

#### Response

```json
{
  "message": "Spice deleted successfully",
  "deletedSpice": {
    "_id": "deleted_spice_id",
    "name": "Deleted Spice Name",
    "description": "Description of the deleted spice.",
    "category": "Category of the deleted spice",
    "origin": "Origin of the deleted spice",
    "medicinalProperties": ["Property 1", "Property 2"],
    "culinaryUses": ["Use 1", "Use 2"],
    "price": 9.99,
    "stock": 20,
    "images": ["https://example.com/deleted_spice1.jpg", "https://example.com/deleted_spice2.jpg"]
  }
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages for various scenarios, such as invalid requests, missing data, and server errors. Ensure to handle these responses in your client applications.