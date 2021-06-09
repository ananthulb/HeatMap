import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function OverallStats() {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>
                <View style={styles.statsContainerLeft}>
                    <Text style={styles.heading} >Cows cycled</Text>
                    <Text style={styles.subText} >95%</Text>
                    <Text style={styles.hintText}>20d since PSM</Text>
                </View>
                <View style={styles.statsContainerRight}>
                    <Text style={styles.heading}>Not yet cycled</Text>
                    <Text style={styles.subText}>16</Text>
                    <Text style={styles.hintText}>Cows</Text>
                </View>
            </View>
            <View style={styles.subHeadingContainer}>


                <Text style={styles.subHeading}>Cycling</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#efecec'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    subHeadingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 20,
        paddingHorizontal: 16
    },
    statsContainerLeft: {
        // flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#717378'
    },
    statsContainerRight: {
        // flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderLeftWidth: 0.5
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#E8EAED',
        borderRadius: 50,
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 18
    },
    subText: {
        fontSize: 44,
        marginVertical: 10,
    },
    hintText: {
        fontSize: 14,
        color: '#717378'
    }
});



