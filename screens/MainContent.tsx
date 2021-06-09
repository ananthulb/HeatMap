import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, VirtualizedList, TouchableOpacity, Button } from 'react-native';

import DATA from '../service/data'
import OverallStats from '../screens/OverallStats'
import { FlatGrid } from 'react-native-super-grid';
import BottomSheet from '@gorhom/bottom-sheet';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import CheckBox from '@react-native-community/checkbox';


// callbacks
let checkbox1 = false;
let checkbox2 = false;
let checkbox3 = false;
let checkbox4 = false;
let checkbox5 = false;
let checkbox6 = false;
function setToggleCheckBox(checkbox, value) {

}

export default function MainContent() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '70%'], []);



    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View >

            <OverallStats />
            <View style={styles.mainContainer}>
                <VirtualizedList
                    data={DATA}
                    initialNumToRender={2}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.bottomSheetTitle}>Cow name</Text>
                    <View style={styles.checkBoxMainContainer}>

                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Heat mount detector</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Tail paint rubbed</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Near sexually active cows</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Vulva signs</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Arched backs</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Excitable and restless</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Riding other cows</Text>
                        </View>
                        <View style={styles.checkbox}>

                            <CheckBox
                                disabled={false}
                                value={checkbox1}
                                onValueChange={(newValue) => setToggleCheckBox(1, newValue)}
                            />
                            <Text >Standing heat</Text>
                        </View>
                    </View>
                    <Button
                        title="Done"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />

                </View>
            </BottomSheet>
        </View>
    );



}


let dcow = {};
let sampledata = [...DATA];
let unconfirmedHeat = [];
let confirmedHeat = [];
unconfirmedHeat = sampledata.filter((k) => {
    return k.status != 'ON_HEAT';
});
confirmedHeat = sampledata.filter((k) => {
    return k.status == 'ON_HEAT';
});


confirmedHeat.map(async (k) => {
    let d = new Date(k.firstDetectedAt);
    var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()
    if (dcow.hasOwnProperty(datestring)) {

        dcow[datestring] = [...dcow[datestring], k]
    }
    else {
        dcow[datestring] = [];
        dcow[datestring] = [...dcow[datestring], k]
    }
})
let keys = Object.keys(dcow);
let dataToShow = [{
    id: 'Unconfirmed heat',
    title: 'Unconfirmed heat',
    cows: unconfirmedHeat
}];
keys.map((f) => {
    dataToShow.push({
        id: f,
        title: f,
        cows: dcow[f]
    })
});

console.log(Object.keys(dataToShow));


const getItem = (data, index) => (dataToShow[index]);

const getItemCount = (data) => dataToShow.length;

const Item = ({ data }) => {

    // variables

    return (<View style={styles.item}>
        <Text style={styles.title}>{data.title}</Text>
        <FlatGrid
            itemDimension={56}
            data={data.cows}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={10}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity >

                        <View style={[styles.itemContainer, { backgroundColor: '#bdc3c7' }]}>
                            <Text style={styles.itemName}>{item.cattleName}</Text>
                            <Status data={item} />
                        </View>
                    </TouchableOpacity>
                )
            }
            }
        />
    </View>)

};

const Status = ({ data }) => {
    if (data.status == 'ON_HEAT') {
        return (
            <Text style={styles.itemCode}>T</Text>
        )
    }
    else {
        return (
            <Text style={styles.itemCode}>x</Text>
        )
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 16
    },
    container: {
        flex: 1,
        // marginHorizontal: 16
    },
    item: {
        paddingTop: 10,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 16
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 56,
    },
    itemName: {
        fontSize: 18,
        color: '#141518',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 16,
        color: '#141518',
        alignItems: 'center',
        textAlign: 'center'
    },
    contentContainer: {

        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'flex-start',
    },
    bottomSheetTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    checkbox: {
        backgroundColor: '#bdc3c7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 45,
        margin: 2
    },
    checkBoxMainContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
        borderBottomWidth: 0.7,
        borderRightColor: '#717378'
    }

});


