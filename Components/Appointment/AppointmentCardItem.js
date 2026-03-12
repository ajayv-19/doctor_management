import { View, Text, Image } from 'react-native'
import React from 'react'
import color from '../../assets/shared/color';
import HorizontalLine from '../Home/Shared/HorizontalLine';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';


export default function AppointmentCardItem({appointment}) {
  return (
    <View style={{padding:10,
    borderWidth:1,
    borderColor:color.LIGHT_GRAY,
    borderRadius:10,
    backgroundColor:color.white,
    marginTop:15
    }}>
      <Text style={{
        fontSize:16,
        marginTop:10,
        fontFamily:'appfont-semi'
      }}>{moment(appointment.attributes.Date).format('MMM Do,  YYYY')} - {appointment.attributes.Time}</Text>
        <HorizontalLine/>
    <View style={{display:'flex',
flexDirection:'row',
gap:10,alignItems:'center'}}>
        
        <Image source={require('../../assets/doc.webp')}
        style={{height:120,
            borderRadius:10,
        width:90}}
        />
        <View>
            <Text style={{
                fontSize:16,
                fontFamily:'appfont-semi'
            }}>{appointment.attributes.DoctorName}</Text>
              <View style={{display:'flex',flexDirection:'row',
    gap:5,alignItems:'center',marginTop:5}}>
            <Ionicons name="location" size={20} color={color.PRIMARY}/>
            <Text style={{fontFamily:'appfont',
        color:color.GRAY}}>{appointment.attributes.Location}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',
    gap:5,alignItems:'center',marginTop:5}}>
            <Ionicons name="document-text" size={20} color={color.PRIMARY}/>
            <Text style={{fontFamily:'appfont',
        color:color.GRAY}}>Booking Id: #{appointment.id}</Text>
        </View>
        </View>
    </View>
    </View>
  )
}