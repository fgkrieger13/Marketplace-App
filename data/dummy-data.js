import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Red Shirt',
        'https://pixabay.com/photos/t-shirt-red-man-plain-model-1710578/',
        'a red t-shirt',
        29.99
    ),
    new Product (
        'p2',
        'u1',
        'Blue Carpet',
        'https://pixabay.com/photos/vestibule-hall-door-carpet-blue-3542790/',
        'a blue carpet',
        89.99
    ),
    new Product (
        'p3',
        'u2',
        'Shoes',
        'https://pixabay.com/vectors/chucks-converse-shoes-footwear-153310/',
        'a blue chuck taylor shoe',
        68.98
    )
];

export default PRODUCTS;