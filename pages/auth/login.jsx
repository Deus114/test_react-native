import { View, Text, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Login = ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Login</Text>
            <StatusBar style='auto' />
            <Button
                title="Đăng nhập"
                onPress={() => navigation.navigate('Main')}
            />
            <Button
                title="Đăng kí"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    )
}

export default Login