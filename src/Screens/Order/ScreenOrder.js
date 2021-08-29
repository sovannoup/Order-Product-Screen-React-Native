/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View
} from 'react-native';
import NavigationService from '../../Service/navigationService';
import { NAV_TYPES } from '../../Navigation/navTypes';
import { ScrollView } from 'react-native-gesture-handler';
import AllProduct from './../Products/AllProduct';
import OrderProduct from './../Products/OrderProduct';
import Cart from './../Products/Cart';

export default class ScreenOrder extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            stateName: 'All',
        }

    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>Order</Text>
                </View>
                <View style={styles.OrderBtn}>
                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={() => this.setState({ stateName: 'All' })}
                    >
                        <Text style={styles.headerText}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={() => this.setState({ stateName: 'Order' })}
                    >
                        <Text style={styles.headerText}> Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={() => this.setState({ stateName: 'Cart' })}
                    >
                        <Text style={styles.headerText}> Cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.products}>
                    {this.state.stateName === 'All' && <AllProduct />}
                    {this.state.stateName === 'Order' && <OrderProduct />}
                    {this.state.stateName === 'Cart' && <Cart />}
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 50,
        justifyContent: 'center',
    },
    OrderBtn: {
        width: '95%',
        marginHorizontal: '2.5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerBtn: {
        backgroundColor: '#4d73be',
        width: '30%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    headerText: {
        fontSize: 15,
        color: 'white',
    }
})