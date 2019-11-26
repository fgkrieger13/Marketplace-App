
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import Colors from '../constants/Colors'


    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: Platform.OS ===  'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary

    }
    

    const ProductsNavigator = createStackNavigator ({
        ProductsOverview: ProductsOverviewScreen,
        ProductDetails: ProductDetailsScreen,
        Cart: CartScreen,
    }, {
        defaultNavigationOptions: defaultNavOptions,
    });


    const OrdersNavigator = createStackNavigator ({
        Orders: OrdersScreen,
    },{
        defaultNavigationOptions: defaultNavOptions,
    });


    const ShopNavigator = createDrawerNavigator ({
        Products: ProductsNavigator,
        Orders: OrdersNavigator,
    },{
        contentOptions: {
            activeTintColor: Colors.primary,

        }
    });

 export default createAppContainer(ShopNavigator);