import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

const SigUpInfo = ({ navigation, route }) => {
    const [form, setForm] = useState({
        name: "",
        staff_id: "",
        position: "",
        phone: "",
        gender: "",
    });

    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                <View className="w-full mt-[10%] h-full px-4 my-6">
                    <Text className="text-2xl mt-10 text-center font-bold">Thông tin cá nhân</Text>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Tên</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Name"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                onChangeText={(n) =>
                                    setForm({ ...form, name: n })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4">
                        <Text className="text-base mt-2">Mã NV</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Staff_id"}
                                className={"flex-auto w-64"}
                                keyboardType="email-address"
                                mode="outlined"
                                onChangeText={(i) =>
                                    setForm({ ...form, staff_id: i })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">SĐT</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Phone"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                onChangeText={(p) =>
                                    setForm({ ...form, phone: p })}
                            />
                        </View>
                    </View>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Chức vụ</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Password"}
                                className={"flex-auto w-64"}
                                mode="outlined"
                                secureTextEntry={true}
                                onChangeText={(p) =>
                                    setForm({ ...form, position: p })}
                            />
                        </View>
                    </View>
                    {/* <View className="space-y-4 mt-2">
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
                    </View> */}
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Giới tính</Text>
                        <View className="border-2 border-black-200 w-[70%] h-13 px-4 rounded-2xl">
                            <Picker
                                selectedValue={form.gender}
                                onValueChange={(g) =>
                                    setForm({ ...form, gender: g })
                                }
                            >
                                <Picker.Item label="Nam" value="male" />
                                <Picker.Item label="Nữ" value="female" />
                            </Picker>
                        </View>
                    </View>

                    <View className="w-full items-center">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="mt-10 bg-white border-2 border-blue-500 w-[40%]
                            rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                            onPress={() => navigation.navigate('PasswordSignUp')}
                        >
                            <Text className="text-blue-4    00 text-lg">
                                Lưu
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SigUpInfo