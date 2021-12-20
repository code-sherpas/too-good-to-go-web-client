import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import CarouselComp from 'react-native-snap-carousel';
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselItem';
import carouselData from '../api/carouselData';

export default function ListofRestaurantView() {

    const isCarousel = useRef(null);

    return (<>
        <View style={styles.container}>
            <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                <Text style={styles.heading}>Discover</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "5%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="location-arrow" color="#114D4D" />
                    <View style={{ marginLeft: "0.5rem" }}>
                        <Text style={{ color: "#114D4D", fontWeight: "900" }}>la Bordeta, Barcelona</Text>
                        <Text style={{ color: "#114D4D" }} >within 10 km</Text>
                    </View>
                </View>
                <View>
                    <Button
                        onPress={() => { console.log("hi") }}
                        title="Change"
                        color="#E1DFD8"
                    />
                </View>
            </View>
            <View style={{ marginBottom: "1rem", flexDirection: "row", paddingHorizontal: "5%", paddingTop: "5%", justifyContent: "space-between" }} >
                <Text style={{ fontWeight: "900", fontSize: "20px" }}>Save before it's too late</Text>
                <View style={{ flexDirection: "row", height: "fit-content", alignItems: "center" }}>
                    <Text style={{ color: "#114D4D", fontWeight: "bold", marginRight: "0.25rem" }}>See all</Text>
                    <Icon name="chevron-right" color="#114D4D" />
                </View>
            </View>
            <View style={{alignContent: "center"}}>
                <CarouselComp
                    layout='tinder'
                    layoutCardOffset={7}
                    ref={isCarousel}
                    data={carouselData}
                    renderItem={CarouselItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />
            </View>
            <View style={{ marginBottom: "1rem", flexDirection: "row", paddingHorizontal: "5%", paddingTop: "5%", justifyContent: "space-between" }} >
                <Text style={{ fontWeight: "900", fontSize: "20px" }}>Recommended for you</Text>
                <View style={{ flexDirection: "row", height: "fit-content", alignItems: "center" }}>
                    <Text style={{ color: "#114D4D", fontWeight: "bold", marginRight: "0.25rem" }}>See all</Text>
                    <Icon name="chevron-right" color="#114D4D" />
                </View>
            </View>
            <View style={{alignContent: "center"}}>
                <CarouselComp
                    layout='tinder'
                    layoutCardOffset={7}
                    ref={isCarousel}
                    data={carouselData}
                    renderItem={CarouselItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />
            </View>


            <View style={{ flex: 2, backgroundColor: 'blue' }} />
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    heading: {
        fontSize: 30,
        fontWeight: "900"
    }
})
