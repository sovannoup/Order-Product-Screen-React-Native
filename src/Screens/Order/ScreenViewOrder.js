/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import NavigationService from '../../Service/navigationService';
import { NAV_TYPES } from '../../Navigation/navTypes';
export default class ViewPro extends Component {
    constructor(prop) {
        super(prop);
        this.state = {

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>Order</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.productBox}>
                        <Image
                            resizeMode={'cover'}
                            style={styles.imgStyle}
                            source={require('./../../Assets/img.jpg')}
                        />
                        <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Title of Product</Text>
                            <Text style={{ fontSize: 15, marginVertical: '8%' }}>Price:  168$</Text>
                            <Text style={{ fontSize: 15 }}>Qty:  1</Text>
                        </View>
                        <Text style={{ fontSize: 15, marginTop: '15%', marginLeft: '5%' }}>Total:  168$</Text>
                    </View>

                    <View style={styles.userInfo}>
                        <View style={styles.userHeader}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Customer Information</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.varr}>Name</Text>
                            <Text style={styles.data}>: Noup Sovan</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.varr}>Tel</Text>
                            <Text style={styles.data}>: XXXXXXXXXX</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.varr}>Address</Text>
                            <Text style={styles.data}>: Takeo Cambodia</Text>
                        </View>
                    </View>

                    <View style={styles.rowBtn}>
                        <TouchableOpacity
                            style={styles.already}
                        >
                            <Text style={styles.btnText}>Already</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancel}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        justifyContent: 'center',
    },
    body: {
        width: '95%',
        marginHorizontal: '2.5%',
        flexDirection: 'column',
    },
    productBox: {
        marginVertical: 20,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#4d73be',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    imgStyle: {
        height: 80,
        width: '25%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4d73be',
    },
    userInfo: {
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: '#4d73be',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    userHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    varr: {
        fontSize: 18,
        width: '35%',
    },
    data: {
        width: '75%',
        fontSize: 18,
        flexWrap: 'wrap',
    },
    rowBtn: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },
    already: {
        width: '45%',
        backgroundColor: '#42A362',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#4d73be',
    },
    cancel: {
        width: '45%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#4d73be',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})