"use client";

import { Product } from "@/typings";
import { useState, useEffect } from 'react';
import { addProduct } from '@/lib/action';


const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function ProductForm({ children }: any) {
  const [formData, setFormData] = useState<Product>({
    name: '',
    slug: '',
    description: '',
    category: [],
    origin: '',
    healthBenefit: [],
    culinaryUses: [],
    price: 0,
    stock: 0,
    images: null
  });

  useEffect(() => {
    if (formData.name) {
      setFormData(prev => ({ ...prev, slug: slugify(prev.name)}));
    }
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
    } else if (name === 'category' || name === 'healthBenefit' || name === 'culinaryUses') {
      setFormData(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim() )}))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if(key === 'category' || key === 'healthBenefit' || key === 'culinaryUses') {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const result = await addProduct(formDataToSend);
      if (result) {
        console.log('Product added successfully');
        // Reset form or redirect
      } else {
        console.error('Failed to add product:');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="p-4">
       <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input input-bordered"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="slug">
          <span className="label-text">Slug</span>
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          className="input input-bordered"
          value={formData.slug}
          readOnly
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="description">
          <span className="label-text">Description</span>
        </label>
        <textarea
          id="description"
          name="description"
          className="textarea textarea-bordered"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="category">
          <span className="label-text">Category (comma-separated)</span>
        </label>
        <input
          type="text"
          id="category"
          name="category"
          className="input input-bordered"
          value={formData.category.join(', ')}
          onChange={handleChange}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="origin">
          <span className="label-text">Origin</span>
        </label>
        <input
          type="text"
          id="origin"
          name="origin"
          className="input input-bordered"
          value={formData.origin}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="healthBenefits">
          <span className="label-text">Health Benefits (comma-separated)</span>
        </label>
        <input
          type="text"
          id="healthBenefits"
          name="healthBenefits"
          className="input input-bordered"
          value={formData.healthBenefit.join(', ')}
          onChange={handleChange}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="culinaryUses">
          <span className="label-text">Culinary Uses (comma-separated)</span>
        </label>
        <input
          type="text"
          id="culinaryUses"
          name="culinaryUses"
          className="input input-bordered"
          value={formData.culinaryUses.join(', ')}
          onChange={handleChange}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="price">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="input input-bordered"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="stock">
          <span className="label-text">Stock</span>
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          className="input input-bordered"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="images">
          <span className="label-text">Images</span>
        </label>
        <input
          type="file"
          accept="image/*"
          id="images"
          name="images"
          className="input input-bordered"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </div>
  );
}
