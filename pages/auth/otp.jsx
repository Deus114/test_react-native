import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'

const OTPVerification = () => {
    return (
        <SafeAreaView className="h-full">
            <View className="w-full mt-[10%] h-full px-4 my-6">
                <Text className="text-2xl">Nhập mã xác thực</Text>
                <Text className="text-base mt-5 mb-5">Mã xác thực 6 số được gửi đến email a...@gmail.com</Text>
                <OtpInput
                    numberOfDigits={6}
                />
            </View>
        </SafeAreaView>
    )
}

export default OTPVerification