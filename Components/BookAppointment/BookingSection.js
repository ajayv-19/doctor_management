import { View, Text, FlatList, StyleSheet,TextInput,TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../assets/shared/color';
import SubHeading from '../Home/SubHeading';
import moment from 'moment';
import PageHeader from '../Home/Shared/PageHeader';
import { getAuth, signOut } from 'firebase/auth';

//import { useUser } from '@clerk/clerk-expo';
import GlobalApi from '../../Services/GlobalApi';

export default function BookingSection({hospital}) {

    //const {isLoaded,isSignedIn,user}=useUser();

    const [next7Days, setNext7Days] = useState([]);
    const [timeList, setTimeList] = useState([]);

   
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [notes, setNotes] = useState();

    const [loader,setLoader]=useState(false);

    useEffect(() => {
        getDays();
        getTime();
    }, [])

    const getDays = () => {
        const today = moment();
        const nextSevenDays = [];
        for (let i = 1; i < 8; i++) {
            const date = moment().add(i, 'days');
            nextSevenDays.push({
                date: date,
                day: date.format('ddd'), //Tue, Mon
                formmatedDate: date.format('Do MMM') //4th Oct
            })

        }


        setNext7Days(nextSevenDays)
    }

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeList(timeList)
    }

    const bookAppointment=()=>{
        setLoader(true);
        const data={
            data:{
                Date:selectedDate,
                Time:selectedTime,
                Email:'metun@gmail.com',
                hospitals:hospital.id,
                // Note:notes
            }
        }
        console.log(data)
        setTimeout(() => {
            setLoader(false); 
        
            ToastAndroid.show('Appointment Booked Successfully!', ToastAndroid.LONG);
          }, 3000); 
        // GlobalApi.createAppointment(data).then(resp=>{
        //     console.log(resp); })
        //     setLoader(false);
        //     ToastAndroid.show('Appointment Booked Successfully!',
        //     ToastAndroid.LONG)
        // },(error)=>{
        //     setLoader(false);
        // })
        
    }
    return (
        <View>
            <Text style={{
                fontSize: 18,
                color: color.GRAY
            }}>Book Appointment</Text>

            <SubHeading subHeadingTitle={'Day'} seelAll={false} />

            <FlatList
                data={next7Days}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={
                        [styles.dayButton,
                        selectedDate == item.date
                            ? { backgroundColor: color.PRIMARY }
                            : null
                        ]
                    }
                        onPress={() => setSelectedDate(item.date)}
                    >
                        <Text style={[{
                            fontFamily: 'appfont',
                        },
                        selectedDate == item.date
                            ? { color: color.white }
                            : null
                        ]}>{item.day}</Text>
                        <Text style={[{
                            fontFamily: 'appfont-semi',
                            fontSize: 16
                        },
                        selectedDate == item.date
                            ? { color: color.white }
                            : null]}>{item.formmatedDate}</Text>

                    </TouchableOpacity>
                )}
            />
            <SubHeading subHeadingTitle={'Time'} seelAll={false} />
            <FlatList
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={
                        [styles.dayButton, {
                            paddingVertical: 16,
                        },
                        selectedTime == item.time
                            ? { backgroundColor: color.PRIMARY }
                            : null
                        ]
                    }
                        onPress={() => setSelectedTime(item.time)}
                    >

                        <Text style={[{
                            fontFamily: 'appfont-semi',
                            fontSize: 16
                        },
                        selectedTime == item.time
                            ? { color: color.white }
                            : null]}>{item.time}</Text>

                    </TouchableOpacity>
                )}
            />

            {/* <SubHeading subHeadingTitle={'Note'} seelAll={false} />
            
            <TextInput
            numberOfLines={3}
            onChangeText={(value)=>setNotes(value)}
            style={{
                backgroundColor:color.LIGHT_GRAY,
                padding:10,
                borderRadius:10,
                borderColor:color.SECONDARY,
                borderWidth:1,
                textAlignVertical:'top'
            }}
            placeholder='Write Notes Here'
                /> */}

<TouchableOpacity 
            onPress={()=>bookAppointment()}
            disabled={loader}
        style={{
            padding:15,
            backgroundColor:color.PRIMARY,
            margin:10,
            borderRadius:99,
            left:0,
            right:0,
            marginTop:50,
            marginBottom:10,
            zIndex:20
        }}>
           {!loader? <Text style={{color:color.white,
            textAlign:'center',
            fontFamily:'appfont-semi',
            fontSize:17}}>Make Appointment</Text>
            :<ActivityIndicator />
            }
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dayButton: {
        borderWidth: 1,
        borderRadius: 99,
        padding: 5,

        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 10,
        borderColor: color.GRAY
    }
})