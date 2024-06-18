import { View, Text, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const SignUp = ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Đăng nhập</Text>
            <StatusBar style='auto' />
            <Button
                title="Đăng nhập"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default SignUp