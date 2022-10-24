import { StyleSheet } from "react-native";
import { color, colorTutor_ } from "../../config/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorTutor_.ipalBlue
    },
    imageView: {
        height: hp('25'),
        width: wp('30')
    },
    headerView: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        backgroundColor: colorTutor_.lightBlue,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp('11'),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: wp('100'),
        paddingHorizontal: wp('8'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bottomBar: {
        position: "absolute",
        backgroundColor: colorTutor_.blue,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp('9'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: 0,
        width: wp('100'),
        paddingHorizontal: wp('10')
    },
    twoPickerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('95'),
        marginBottom: hp('2'),
        alignItems: 'center'
    },
    btnTxt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('3'),
        height: hp('5'),
        width: wp('30'),
        borderRadius: 5,
        backgroundColor: colorTutor_.ipallightGreen,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    accView: {
        marginLeft: wp('2'),
        // marginBottom: hp('0.5')

    }
})