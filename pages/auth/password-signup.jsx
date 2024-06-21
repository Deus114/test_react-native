import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { postRegister } from '../../services/apiAuthService'

const PasswordSignUp = ({ navigation, route }) => {
    const fillRePass = async (re) => {
        if (re === pass) {
            setError(false);
            let res = await callRegister();
            if (res.returnCode === 1000) {
                navigation.navigate("Main");
            }
        }

        else {
            setError(true);
        }
    }

    const callRegister = () => {
        return postRegister(route.params.form.email, pass, pass, route.params.form.name, route.params.form.dob,
            route.params.form.gender, route.params.form.phone, route.params.form.role, route.params.form.avatar, route.params.form.otp
        )
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
            <ScrollView>
                <View className="w-full h-full px-4 my-6 mt-20">
                    <Text className="text-2xl font-bold">Thiết lập mật khẩu</Text>
                    <View className="border border-grey-200 h-20 px-2 rounded-2xl mt-10 justify-center">
                        <OtpInput
                            numberOfDigits={6}
                            autoFocus={true}
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
                            onFilled={(re) => { fillRePass(re) }}
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default PasswordSignUp