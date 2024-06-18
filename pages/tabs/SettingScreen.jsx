import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const Settings = ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Settings</Text>
        </View>
    )
}

export default Settings