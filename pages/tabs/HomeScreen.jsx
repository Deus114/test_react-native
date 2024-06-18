import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Home</Text>
        </View>
    )
}

export default Home