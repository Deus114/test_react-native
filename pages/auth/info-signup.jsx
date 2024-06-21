import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable, Platform, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

const SignUpInfo = ({ navigation, route }) => {
    const [form, setForm] = useState({
        email: route.params.email,
        name: "",
        role: "",
        phone: "",
        gender: "m",
        dob: new Date(),
        avatar: "",
        otp: route.params.otp
    });

    const [date, setDate] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const OnChange = ({ type }, selectedDate) => {
        if (type === 'set') {
            let currentDay = selectedDate;
            setForm({ ...form, dob: currentDay })
            if (Platform.OS === "android") {
                setShowPicker(!showPicker);
                setDate(currentDay.toDateString())
            }
        } else {
            setShowPicker(!showPicker);
        }
    }

    const handleUpLoadImage = async () => {
        try {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            let res = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
            if (!res.canceled) {
                setForm({ ...form, avatar: res.assets[0].uri })
            }
        } catch (error) {
            confirm.log(error);
        }
    }

    const submit = () => {
        navigation.navigate('PasswordSignUp', {
            form: form
        })
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <View className="w-full h-full px-4 my-6">
                    <Text className="text-2xl text-center font-bold">Thông tin cá nhân</Text>
                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Tên</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Name"}
                                className={"flex-auto w-full"}
                                mode="outlined"
                                onChangeText={(n) =>
                                    setForm({ ...form, name: n })}
                            />
                        </View>
                    </View>

                    <View className="space-y-4 mt-2">
                        <Text className="text-base">SĐT</Text>
                        <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                            <TextInput
                                label={"Phone"}
                                className={"flex-auto w-full"}
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
                                label={"Role"}
                                className={"flex-auto w-full"}
                                mode="outlined"
                                onChangeText={(p) =>
                                    setForm({ ...form, role: p })}
                            />
                        </View>
                    </View>

                    <View className="space-y-4 mt-2">
                        <Text className="text-base">Ngày sinh</Text>
                        {
                            showPicker && (
                                <RNDateTimePicker
                                    mode='date'
                                    display='spiner'
                                    value={form.dob}
                                    onChange={OnChange}
                                />
                            )
                        }
                        <Pressable
                            onPress={() => setShowPicker(!showPicker)}
                        >
                            <View className="border-2 border-black-200 w-full h-14 px-4 rounded-2xl">
                                <TextInput
                                    label={"dob"}
                                    className={"flex-auto w-full text-primary"}
                                    mode="outlined"
                                    onChangeText={(d) =>
                                        setDate(d)}
                                    editable={false}
                                    value={date}
                                />
                            </View>
                        </Pressable>
                    </View>

                    <View className="space-y-4 mt-2 flex flex-row items-center">
                        <Text className="text-base">Giới tính:</Text>
                        <View className="border-2 ml-10 border-black-200 w-[50%] h-13 px-4 rounded-2xl">
                            <Picker
                                selectedValue={form.gender}
                                onValueChange={(g) =>
                                    setForm({ ...form, gender: g })
                                }
                            >
                                <Picker.Item label="Nam" value="m" />
                                <Picker.Item label="Nữ" value="f" />
                            </Picker>
                        </View>
                    </View>

                    <View className="space-y-4 mt-4 flex flex-row items-center">
                        <Text className="text-base w-1/5">Hình đại diện:</Text>
                        <Pressable
                            className="ml-5"
                            onPress={() => handleUpLoadImage()}
                        >
                            <MaterialCommunityIcons name="folder-upload-outline" size={40} color="black" />
                        </Pressable>
                        {form.avatar && <Image className="ml-10" source={{ uri: form.avatar }} style={styles.image} />}
                    </View>

                    <View className="w-full items-center">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="mt-10 bg-white border-2 border-blue-500 w-[40%]
                            rounded-xl min-h-[50px] flex flex-row justify-center items-center"
                            onPress={() => { submit() }}
                        >
                            <Text className="text-blue-400 text-lg">
                                Tiếp
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
});

export default SignUpInfo