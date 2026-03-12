import { View, Text, FlatList } from 'react-native'
import React from 'react'
import color from '../../assets/shared/color';
import { Ionicons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import PageHeader from '../Home/Shared/PageHeader';
import SubHeading from '../Home/SubHeading';
import HorizontalLine from '../Home/Shared/HorizontalLine';

export default function DocInfo({ hospital }) {
    return hospital && (
        <View>
            <Text style={{
                fontSize: 23,
                fontFamily: 'appfont-semi'
            }}>{hospital.attributes.Name}</Text>

            <FlatList
                data={hospital.attributes.data}
                horizontal={true}
                renderItem={({ item }) => (
                    <Text style={{
                        marginRight: 10, color: color.GRAY
                    }}>{item.attributes.Name},</Text>
                )}
            />

           <HorizontalLine/>
            <View style={{
                display: 'flex', flexDirection: 'row',
                gap: 5, alignItems: 'center'
            }}>
                <Ionicons name="location" size={22} color={color.PRIMARY} />
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'appfont',
                    color: color.GRAY
                }}>{hospital.attributes.Location}</Text>
            </View>

            <View style={{
                display: 'flex', flexDirection: 'row',
                gap: 5, alignItems: 'center',
                marginTop:6
            }}>
                <Ionicons name="time" size={22} color={color.PRIMARY} />
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'appfont',
                    color: color.GRAY
                }}>Mon Sun | 11AM - 8 PM</Text>
            </View>

         

            <ActionButton/>

            <View style={{
                borderBottomWidth: 1,
                marginTop:15,
                borderColor: color.LIGHT_GRAY, margin: 5, marginBottom: 15
            }}></View>

            <SubHeading subHeadingTitle={'About'}/>
            <Text>{hospital.attributes.Description}</Text>
        </View>
    )
}