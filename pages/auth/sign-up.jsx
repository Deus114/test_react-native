import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

const SignUp = ({ navigation }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        repassword: "",
        role: "",
        name: "",
        phone: "",
        gender: "",
    });

    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                <View className="w-full mt-[10%] h-full px-4 my-6">
                    <Text className="text-2xl">Đăng Kí</Text>
                    <View className="space-y-4">
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
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Mật khẩu</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Password"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                secureTextEntry={true}
                                onChangeText={(p) =>
                                    setForm({ ...form, password: p })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Nhập lại mật khẩu</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Password"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                secureTextEntry={true}
                                onChangeText={(r) =>
                                    setForm({ ...form, repassword: r })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Họ và tên</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Password"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                onChangeText={(p) =>
                                    setForm({ ...form, phone: p })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">SĐT</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Password"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                onChangeText={(n) =>
                                    setForm({ ...form, name: n })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Vai trò</Text>
                        <View className="border-2 border-black-200 w-[70%] h-13 px-4 rounded-2xl">
                            <Picker
                                selectedValue={form.role}
                                onValueChange={(r) =>
                                    setForm({ ...form, role: r })
                                }
                            >
                                <Picker.Item label="Nhân viên" value="staff" />
                                <Picker.Item label="Quản trị viên" value="admin" />
                            </Picker>
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Giới tính</Text>
                        <View className="border-2 border-black-200 w-[70%] h-13 px-4 rounded-2xl">
                            <Picker
                                selectedValue={form.gender}
                                onValueChange={(r) =>
                                    setForm({ ...form, gender: r })
                                }
                            >
                                <Picker.Item label="Nam" value="male" />
                                <Picker.Item label="Nữ" value="female" />
                                <Picker.Item label="Khác" value="others" />
                            </Picker>
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="mt-10 bg-green-200 border-2 border-black-200 
                    rounded-xl min-h-[62px] flex flex-row justify-center items-center"
                        onPress={() => navigation.navigate('OTP')}
                    >
                        <Text className="text-primary text-lg">
                            Đăng kí
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp