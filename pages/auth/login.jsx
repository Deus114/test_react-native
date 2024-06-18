import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <SafeAreaView className="h-full">
            <View className="w-full mt-[20%] h-full px-4 my-6">
                <Text className="text-2xl mt-10">Xin chào</Text>
                <View className="space-y-2">
                    <Text className="text-base mt-10">Email</Text>
                    <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                        <TextInput
                            label={"Email"}
                            className={"flex-auto w-64"}
                            keyboardType="email-address"
                            mode="outlined"
                            onChangeText={(e) =>
                                setForm({ ...form, email: e })}
                        />
                    </View>
                </View>
                {/* <TouchableOpacity className='bg-green-200 border-2 border-black-200 w-full h-16 px-4 rounded-2xl'>
                    <Text className='text-2xl mt-10'>Đăng nhập</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="mt-10 bg-green-200 border-2 border-black-200 
                    rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                    onPress={() => navigation.navigate('OTP')}
                >
                    <Text className="text-primary text-lg">
                        Tiếp tục
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login