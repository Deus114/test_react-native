import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'

const PasswordSignUp = ({ navigation }) => {
    const fillRePass = (repass) => {
        if (repass === pass) {
            navigation.navigate('Main');
            setError(false);
        }

        else {
            setError(true);
        }
    }
    const fillPass = (pass) => {
        if (pass === repass) {
            navigation.navigate('Main');
        }
    }

    const [pass, setPass] = useState("");
    const [repass, setRePass] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setPass("");
        setRePass("");
    }, [])

    return (
        <SafeAreaView className="h-full">
            <View className="w-full h-full px-4 my-6 mt-20">
                <Text className="text-2xl font-bold">Thiết lập mật khẩu</Text>
                <View className="border border-grey-200 h-20 px-2 rounded-2xl mt-10 justify-center">
                    <OtpInput
                        numberOfDigits={6}
                        autoFocus={false}
                        secureTextEntry={true}
                        onTextChange={(pass) => {
                            setPass(pass);
                        }}
                        onFilled={(pass) => { fillPass(pass) }}
                        theme={{
                            pinCodeContainerStyle: {
                                width: 50,
                                height: 50,
                            }
                        }}
                    />
                </View>
                <Text className="text-2xl font-bold mt-10">Vui lòng nhập lại</Text>
                <View className="border border-grey-200 h-20 px-2 rounded-2xl mt-10 justify-center">
                    <OtpInput
                        numberOfDigits={6}
                        autoFocus={false}
                        secureTextEntry={true}
                        onTextChange={(RePass) => {
                            setRePass(RePass);
                        }}
                        onFilled={(pass) => { fillRePass(pass) }}
                        theme={{
                            pinCodeContainerStyle: {
                                width: 50,
                                height: 50,
                            }
                        }}
                    />
                </View>
                <Text style={{ opacity: error ? 1 : 0 }} className="text-1xl text-red-500 mt-2">Nhập sai vui lòng nhập lại</Text>

            </View>
        </SafeAreaView>
    )
}

export default PasswordSignUp