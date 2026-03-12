import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentDoctorInfo from '../Components/BookAppointment/AppointmentDoctorInfo'
import ActionButton from '../Components/DoctorDetail/ActionButton'
import HorizontalLine from '../Components/Home/Shared/HorizontalLine';
import BookingSection from '../Components/BookAppointment/BookingSection';
import color from '../assets/shared/color';

export default function BookAppointment() {
    const param=useRoute().params;
  return (
    <ScrollView style={{padding:20,backgroundColor:color.white}}>
        <AppointmentDoctorInfo hospital={param.hospital} />
        <ActionButton/>
        <HorizontalLine/>
        <BookingSection hospital={param.hospital} />
    </ScrollView>
  )
}
