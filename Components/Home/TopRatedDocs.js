import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Docnum from './Docnum';
import { useNavigation } from '@react-navigation/native';
import SubHeading from './SubHeading';

export default function TopRatedDocs() {

    const [hospitalList,setHospitalList]=useState([]);

    const navigation=useNavigation();
    useEffect(()=>{
        getTopRatedDocs()
    },[])
    const getTopRatedDocs=()=>{
        GlobalApi.getTopRatedDocs().then(resp=>{
            setHospitalList(resp.data.data)
        })
    }
  return hospitalList&&(
    <View style={{marginTop:0}}>
        <SubHeading subHeadingTitle={'Our Doctors'} />
        <FlatList
            data={hospitalList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity onPress={
                    ()=>navigation.navigate('doc-details',
                    {
                        hospital:item
                    }
                    )
                }>
                <Docnum hospital={item} />
                </TouchableOpacity>
            )}
        />
    </View>
  )
}
