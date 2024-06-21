import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    const account = useSelector(state => state.user)
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">hello {account.name}</Text>
        </View>
    )
}

export default Home