import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity,} from 'react-native';
import Colors from '../../constants/Colors';


const ProductItem = props => {

    return (
        <TouchableOpacity onPress={props.onViewDetail}>
        <View style={styles.product}>
            <Image style = {styles.image} source = {{uri: props.image}}/>
            <View style = {styles.details}>
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style = {styles.actions}>
                <Button color={Colors.primary}title="View Details" onPress={props.onViewDetail}/>
                <Button color={Colors.primary}title="Add to Cart" onPress={props.onAddToCart}/>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '60%',
    },
    details: {
        fontFamily: 'open-sans',
        alignItems: 'center',
        
        padding: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2,
    
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },

});

export default ProductItem;