/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Order extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => NavigationService.navigate(NAV_TYPES.ORDER)}
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn: {
        width: 100,
        height: 50,
        backgroundColor: '#4d73be',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})