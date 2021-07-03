import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'Nir',
            email: 'admin@eee.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Johnny',
            email: 'user@eee.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike slim short',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 3,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 5,
            description: 'high quality product',
        },

        {
            name: 'Adidas slim pants',
            category: 'Shirts',
            image: '/images/p2.jpeg',
            price: 100,
            countInStock: 9,
            brand: 'Adidas',
            rating: 1.5,
            numReviews: 18,
            description: 'high quality product',
        },

        {
            name: 'Lacoste slim short',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 2.5,
            numReviews: 23,
            description: 'high quality product',
        },

        {
            name: 'Nike slim pants',
            category: 'Pants',
            image: '/images/p4.jpeg',
            price: 78,
            countInStock: 25,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 16,
            description: 'high quality product',
        },

        {
            name: 'Puma slim pants',
            category: 'Pants',
            image: '/images/p5.jpeg',
            price: 61,
            countInStock: 10,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 54,
            description: 'high quality product',
        },

        {
            name: 'Adidas slim pants',
            category: 'Pants',
            image: '/images/p6.jpeg',
            price: 140,
            countInStock: 14,
            brand: 'Adidas',
            rating: 0.5,
            numReviews: 75,
            description: 'high quality product',
        },
    ],
};

export default data;