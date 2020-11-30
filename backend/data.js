import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "milos",
      email: "tomicm990@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },

    {
      name: "jovana",
      email: "topic.jovana@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "2",
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "3",
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 2,
      numReviews: 18,
      description: "high quality product",
    },
    {
      _id: "4",
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 5,
      brand: "Nike",
      rating: 4.7,
      numReviews: 50,
      description: "high quality product",
    },
    {
      _id: "5",
      name: "Puma Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 15,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "6",
      name: "Adidas Slim Pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 21,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 88,
      description: "high quality product",
    },
  ],
};
