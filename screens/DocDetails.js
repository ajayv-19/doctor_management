import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import color from '../assets/shared/color';
import PageHeader from '../Components/Home/Shared/PageHeader';
import DocInfo from '../Components/DoctorDetail/DocInfo';

export default function DocDetails() {
    const [hospital, setHospital] = useState();
    const param = useRoute().params;
    const navigation = useNavigation();
    useEffect(() => {
        setHospital(param.hospital)
    }, [])


    return hospital && (
        <View style={{ flex: 1, backgroundColor: color.white }}>
             <View style={{
                    position: '', zIndex: 10,
                    marginTop: 25,
                    marginBottom : 5,
                    left: 5,
                }}>
                    <PageHeader title={'Know Your Doctor'} />
                </View>
            <ScrollView >
               
                <View>
                    <Image source={{ uri: hospital.attributes.Image.data.attributes.url }}
                        style={{
                            width: '100%',
                            height: 390
                        }}
                    />

                    <View style={{
                        marginTop: -20,
                        backgroundColor: color.white,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 20
                    }}>
                        <DocInfo hospital={hospital} />
                    </View>
                </View>



            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('book-appointment', {
                    hospital: hospital
                })}
                style={{
                    padding: 13,
                    backgroundColor: color.PRIMARY,
                    margin: 10,
                    borderRadius: 99,
                    left: 0,
                    right: 0,
                    marginBottom: 10,
                    zIndex: 20
                }}>
                <Text style={{
                    color: color.white,
                    textAlign: 'center',
                    fontFamily: 'appfont-semi',
                    fontSize: 17
                }}>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    )
}


