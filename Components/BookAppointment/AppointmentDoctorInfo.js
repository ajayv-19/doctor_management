import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Home/Shared/PageHeader';
import color from '../../assets/shared/color';
import { Ionicons } from '@expo/vector-icons';
import HorizontalLine from '../Home/Shared/HorizontalLine';

export default function AppointmentDoctorInfo({hospital}) {
  return (
    <View>
      <PageHeader title={'Book Appointment'} />
      <View style={{marginTop:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:15}}>
        <Image source={{uri:hospital.attributes.Image.data.attributes.url}}
          style={{width:100,height:100,borderRadius:99}}
        />
        <View>
          <Text style={{
            fontSize:20,
            fontFamily:'appfont-semi',
            marginBottom:8
          }}>{hospital.attributes.Name}</Text>
          <View style={{
                display: 'flex', flexDirection: 'row',
                gap: 5, alignItems: 'center'
            }}>
                <Ionicons name="location" size={22} color={color.PRIMARY} />
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'appfont',
                    color: color.GRAY,
                    width:'70%'
                }}>{hospital.attributes.Email}</Text>
            </View>
            
        </View>

      </View>
      <HorizontalLine/>
    </View>
  )
}