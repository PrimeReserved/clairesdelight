# Food Spices Admin Panel Components

## Overview
This repository contains reusable components used in the Food Spices Admin Panel project. These components are designed to provide consistent styling and functionality across different screens of the admin panel.

## Available Components

1. **Button Component:** A customizable button component for use in forms, dialogs, and action items.
2. **Input Component:** An input component for text input with support for validation and error handling.
3. **Dropdown Component:** A dropdown component for selecting options from a list.
4. **Table Component:** A table component for displaying data in a tabular format with sorting and pagination.
5. **Modal Component:** A modal component for displaying overlay content or dialogs.
6. **Card Component:** A card component for displaying content with a consistent layout and style.
7. **Chart Component:** A chart component for visualizing data using various chart types.
8. **Sidebar Component:** A sidebar component for navigation and menu items.

## Usage

To use these components in your project, follow these steps:

1. Clone this repository.
2. Copy the desired component files into your project.
3. Import the component into your React application.
4. Customize the component props and styling as needed.

Example:

```jsx
import React from 'react';
import { Button } from 'food-spices-components';

const MyComponent = () => {
  return (
    <div>
      <Button onClick={() => console.log('Button clicked')}>
        Click Me
      </Button>
    </div>
  );
};

export default MyComponent;
