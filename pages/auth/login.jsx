import {
    View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { postPreLogin } from '../../services/apiAuthService';

const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        if (!error && validateEmail(email)) {
            setIsLoading(true);
            let res = await postPreLogin(email);
            setIsLoading(false);
            if (res && res.returnCode === 1000) {
                navigation.navigate('OTP', {
                    email: email,
                    role: route.params.role,
                    login: true
                });
                setError(false);
            }

            else {
                console.log(res);
                setError(true);
                setMessage(res?.message);
            }
        }
        else {
            setMessage("Email không đúng định dạng");
            setError(true);
        }
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <View className="w-full mt-[20%] h-full px-6 my-6">
                    <Text className="text-2xl text-green-500 font-bold mt-10 text-center">Xin chào</Text>
                    <Text className="text-1xl mt-10 text-center">Vui lòng nhập email để tiếp tục</Text>
                    <View className="space-y-2">
                        <Text className="text-base mt-10 font-bold">Email</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4
                            focus:border-secondary rounded-2xl">
                            <TextInput
                                label={"Email"}
                                className={"flex-auto w-full"}
                                keyboardType="email-address"
                                mode="outlined"
                                onChangeText={(e) => {
                                    setEmail(e)
                                    if (!validateEmail(e)) {
                                        setMessage("Email không đúng định dạng");
                                        setError(true);
                                    } else {
                                        setError(false);
                                    }
                                }}
                            />
                        </View>
                        <Text style={{ opacity: error ? 1 : 0 }} className="text-1xl text-red-500 mt-4">{message}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        className="mt-5 bg-green-300 border-2 border-black-500 w-[90%] ml-[5%]
                        rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                        onPress={() => handleLogin()}
                        disabled={isLoading}
                    >
                        <Text className="text-primary ml-6 text-lg">
                            Tiếp tục
                        </Text>
                        <ActivityIndicator style={{ opacity: isLoading ? 1 : 0 }} className="ml-3" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login