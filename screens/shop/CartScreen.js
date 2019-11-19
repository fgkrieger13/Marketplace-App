import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart'






const CartScreen = props => {

    const cartTotal = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems;
    })

    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summarytext}>Total: <Text style={styles.amount}>${cartTotal.toFixed(2)}</Text></Text>
                <Button color={Colors.accent}title='Order Now' 
                disabled={cartItems.length === 0}/>
            </View>
            <FlatList data={cartItems} keyExtractor={item => item.productId}
            renderItem={itemData => <CartItem 
            quantity = {itemData.item.quantity}
            title = {itemData.item.productTitle}
            amount = {itemData.item.sum}
            onRemove = {() => {
                dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}/>}/>
        </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summarytext: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,

    },
    amount: {
        color: Colors.accent,
    },

});

export default CartScreen