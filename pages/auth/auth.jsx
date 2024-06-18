import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = ({ navigation }) => {
    return (
        <SafeAreaView className="h-full">
            <View className="justify-center w-full mt-[20%] h-full px-4 my-6">
                <Text className="ml-[20%] font-bold text-1xl mt-10">Bạn đăng nhập với vai trò là:</Text>
                <View className="w-full items-center">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="mt-10 bg-green-200 border-2 w-[80%] border-black-200 
                        rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text className="text-primary text-lg">
                            NHÂN VIÊN
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text className="ml-[44%] mt-5 text-primary text-lg">
                    Hay
                </Text>
                <View className="w-full items-center">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="mt-5 bg-green-200 border-2 w-[80%] border-black-200 
                        rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text className="text-primary text-lg">
                            QUẢN TRỊ VIÊN
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg">Chưa có tài khoản?</Text>
                    {/* <Link href="SigUp" className="text-blue text-lg">Đăng kí</Link> */}
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text className="text-blue-500 text-lg">Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Auth