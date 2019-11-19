import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Red Shirt',
        "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg",
        'a red t-shirt',
        29.99
    ),
    new Product(
        'p2',
        'u1',
        'Blue Carpet',
        "https://cdn.pixabay.com/photo/2018/07/16/20/40/vestibule-3542790_960_720.jpg",
        'a blue carpet',
        89.99
    ),
    new Product(
        'p3',
        'u2',
        'Shoes',
        "https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png",
        'a blue chuck taylor shoe',
        68.98
    )
];

export default PRODUCTS;