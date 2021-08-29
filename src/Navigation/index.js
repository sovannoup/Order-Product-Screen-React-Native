/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Image, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { NAV_TYPES } from './navTypes'
import screenLogin from '../Containers/LoginContainer';
import screenOrder from '../Containers/OrderContainer';
import screenViewOrder from '../Containers/ViewOrderContainer'; 2

const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]: {
            screen: screenLogin,
            navigationOptions: {
                headerShown: false
            },
        },

    },
    {
        initialRouteName: NAV_TYPES.LOGIN,
    }
)

const OrderNavigation = createStackNavigator(
    {
        [NAV_TYPES.ORDER]: {
            screen: screenOrder,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)

const ViewOrderNavigation = createStackNavigator(
    {
        [NAV_TYPES.VIEWORDER]: {
            screen: screenViewOrder,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)


//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.ORDER]: {
            screen: OrderNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <Text style={{ textAlign: 'center', color: focused ? 'black' : '#4d73be' }}>Order</Text>
                ),
            }
        },
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            //   activeBackgroundColor:'#f5f5f5',

            labelStyle: {
                fontSize: 20,
            },
            style: { height: Platform.OS === 'ios' ? 40 : 43, paddingBottom: Platform.OS === 'ios' ? 0 : 8 },
            activeColor: 'blue',
            activeTabStyle: { backgroundColor: 'blue' },

        },
    }

)


const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN]: {
            screen: TabNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.VIEWORDER]: {
            screen: ViewOrderNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: NAV_TYPES.MAIN
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]: {
            screen: IntroNavigator,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.CORE]: {
            screen: CoreNavigation,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        initialRouteName: NAV_TYPES.INTRO
    }
)
export default createAppContainer(MainNavigation)