## Project Overview

### API Endpoints
The application includes a RESTful API for fetching product data. The API is accessible at:
```
GET /api/products
```
This endpoint returns a list of products with the following attributes:
- name: The name of the product.
- popularityScore: A percentage score representing the popularity of the product.
- weight: The weight of each product in grams.
- images: Product images (three images for each product, one for each color option).

### Dynamic Price Calculation
The price of each product is calculated using the formula:
```
Price = (popularityScore + 1) * weight * goldPrice
```
The `goldPrice` is retrieved from a real-time data source via [Live Metal Prices API](https://rapidapi.com/not-null-solutions1-not-null-solutions-default/api/live-metal-prices). The API provides the current gold price in USD per gram.

### Frontend Features
- The frontend displays a list of products using a carousel layout.
- Users can select a color option for each product, which updates the displayed image.
- The popularity score is visualized as stars, converted to a scale of 1 to 5 with one decimal place.

### Bonus Features
The API supports filtering products based on:
- Price range
- Popularity score

## Live Demo

A live demo of the application is available at https://kutez-assignment.vercel.app.

## Installation

### Prerequisites
- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tolgaizdas/kutez-assignment
   cd kutez-assignment
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
