/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image,
} from 'react-native'
import NavigationService from '../../Service/navigationService';
import { NAV_TYPES } from '../../Navigation/navTypes';
import navigationService from '../../Service/navigationService';
export default class ProBox extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            proName: this.props.proName,
            proPrice: this.props.proPrice,
            proNum: this.props.proNum,
        }

    }
    render() {
        return (
            <TouchableOpacity style={styles.productBox}
                onPress={() => NavigationService.navigate(NAV_TYPES.VIEWORDER, { name: 'sovan' })}
            >
                <Image
                    resizeMode={'cover'}
                    style={styles.imgStyle}
                    source={require('./../../Assets/img.jpg')}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{this.state.proName}</Text>
                    <Text style={{ fontSize: 15, marginVertical: '8%' }}>Price:  {this.state.proPrice}$</Text>
                    <Text style={{ fontSize: 15 }}>Qty:  {this.state.proNum}</Text>
                </View>
                <Text style={{ fontSize: 15, marginTop: '15%', marginLeft: '5%' }}>Total:  {this.state.proPrice * this.state.proNum}$</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    productBox: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginVertical: 20,
        flexDirection: 'row',
    },
    imgStyle: {
        height: 80,
        width: '25%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#4d73be',
    },
})