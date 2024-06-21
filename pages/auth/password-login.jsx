import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { postLogin } from '../../services/apiAuthService'

const PasswordLogin = ({ navigation, route }) => {
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setPass("");
    }, [])

    const clearPass = useRef(null);
    const fillPass = async (pass) => {
        let res = await postLogin(route.params.otp, route.params.email, route.params.role, pass);
        if (res && res.returnCode === 1000) {
            setError(false);
            navigation.navigate("Main");

        } else {
            console.log(res);
            setError(true);
        }
    }

    return (
        <SafeAreaView className="h-full">
            <View className="w-full h-full px-4 my-6 mt-20">
                <Text className="text-2xl font-bold">Nhập mật khẩu</Text>
                <View className="border border-grey-200 h-20 px-2 rounded-2xl mt-10 justify-center">
                    <OtpInput
                        ref={clearPass}
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
                <Text style={{ opacity: error ? 1 : 0 }} className="text-1xl text-red-500 mt-2">Sai mật khẩu vui lòng nhập lại</Text>

            </View>
        </SafeAreaView>
    )
}

export default PasswordLogin