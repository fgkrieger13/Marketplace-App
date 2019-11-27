import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import UserProductsScreen from '../screens/user/UserProductsScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';


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
        navigationOptions: {
            drawerIcon: drawerConfig => (<Ionicons name='ios-cart'
            size={23}
            color = {drawerConfig.tintColor}/>)
        },
        defaultNavigationOptions: defaultNavOptions,
    });


    const OrdersNavigator = createStackNavigator ({
        Orders: OrdersScreen,
    },{
        navigationOptions: {
            drawerIcon: drawerConfig => (<Ionicons name='ios-list'
            size={23}
            color = {drawerConfig.tintColor}/>)
        },
        defaultNavigationOptions: defaultNavOptions,
    });

    const AdminNavigator = createStackNavigator ({
        UserProducts: UserProductsScreen,
    },{
        navigationOptions: {
            drawerIcon: drawerConfig => (<Ionicons name='ios-create'
            size={23}
            color = {drawerConfig.tintColor}/>)
        },
        defaultNavigationOptions: defaultNavOptions,
    });


    const ShopNavigator = createDrawerNavigator ({
        Products: ProductsNavigator,
        Orders: OrdersNavigator,
        Admin: AdminNavigator,
    },{
        contentOptions: {
            activeTintColor: Colors.primary,

        }
    });

 export default createAppContainer(ShopNavigator);