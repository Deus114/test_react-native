import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { postEmailSignUp, postOtpVerify, postPreLogin } from '../../services/apiAuthService'

const OTPVerification = ({ navigation, route }) => {

    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const reSend = useRef(null);

    useEffect(() => {
        setOtp("");
        setEmail(route.params.email);
    }, [])

    const fillOTP = async (otp) => {
        if (route.params.login && route.params.login === true) {
            let res = await postOtpVerify(otp, email);
            if (res && res.returnCode === 1000) {
                navigation.navigate('PasswordLogin', {
                    email: email,
                    otp: otp,
                    role: route.params.role,
                });
                setError(false);
            } else {
                reSend.current.clear();
                setError(true);
                console.log(res);
            }
        } else {
            let res = await postOtpVerify(otp, email);
            if (res && res.returnCode === 1000) {
                navigation.navigate('SignUpInfo', {
                    email: email,
                    otp: otp
                });
                setError(false);
            } else {
                reSend.current.clear();
                setError(true);
                console.log(res);
            }
        }
    }

    const handleResend = async () => {
        if (route.params.login && route.params.login === true) {
            reSend.current.clear();
            let res = await postPreLogin(email);
            if (res && res.returnCode === 1000) {
                setError(false);
            } else {
                setError(true);
                console.log(res);
            }
        } else {
            reSend.current.clear();
            let res = await postEmailSignUp(email);
            if (res && res.returnCode === 1000) {
                setError(false);
            } else {
                setError(true);
                console.log(res);
            }
        }
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="w-full mt-[10%] h-full px-6 my-6">
                <Text className="text-2xl font-bold">Nhập mã xác thực</Text>
                <Text className="text-base mt-5 mb-5">Mã xác thực 6 số được gửi đến email a...@gmail.com</Text>
                <OtpInput
                    autoFocus={true}
                    ref={reSend}
                    numberOfDigits={6}
                    onTextChange={(otp) => {
                        setOtp(otp);
                    }}
                    onFilled={(otp) => { fillOTP(otp) }}
                    focusStickBlinkingDuration={400}
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
                        onPress={() => { handleResend() }}
                    >
                        <Text className="text-green-500 text-lg">Gửi lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OTPVerification