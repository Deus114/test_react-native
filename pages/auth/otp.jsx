import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { postOtpSignUp } from '../../services/apiAuthService'

const OTPVerification = ({ navigation, route }) => {
    const fillOTP = async (otp) => {
        let res = await postOtpSignUp(otp, email);
        if (res && res.returnCode === 1000) {
            navigation.navigate('SigUpInfo', {
                email: email,
                otp: otp
            })
        }
    }

    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setOtp("");
        setEmail(route.params.email);
    }, [])

    return (
        <SafeAreaView className="h-full">
            <View className="w-full mt-[10%] h-full px-4 my-6">
                <Text className="text-2xl font-bold">Nhập mã xác thực</Text>
                <Text className="text-base mt-5 mb-5">Mã xác thực 6 số được gửi đến email a...@gmail.com</Text>
                <OtpInput
                    numberOfDigits={6}
                    onTextChange={(otp) => {
                        setOtp(otp);
                    }}
                    onFilled={(otp) => { fillOTP(otp) }}
                    theme={{
                        pinCodeContainerStyle: {
                            width: 50,
                            height: 50,
                        }
                    }}
                />
                <Text style={{ opacity: error ? 1 : 0 }} className="text-1xl text-red-500 mt-2">Nhập sai vui lòng nhập lại</Text>
                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg">Không nhận được mã?</Text>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text className="text-green-500 text-lg">Gửi lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OTPVerification