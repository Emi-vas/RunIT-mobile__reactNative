import { StyleSheet } from "react-native/types"
import { COLORS } from "../../../assets/constants"


export const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        flex: 1
    },
    title: {
        color: COLORS.orangeDark,
        textAlign: "center",
        fontSize: 40,
        letterSpacing: 4,
    },
    subTitle: {
        color: COLORS.blackLight,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 20,
        marginVertical: 10
    },

    //stepBloc
    step: {
        backgroundColor: COLORS.orangeDark,
        padding: 20,
        borderRadius: 20,
        marginTop: 30
    },
    textStep: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginVertical: 3
    },
    blocStep: {
        flexDirection: "row",
        alignItems: "center"
    },
    rep: {
        padding: 10,
        marginLeft: 3,
    },
    textRep: {
        fontSize: 30,
        color: COLORS.blackLight,
        
       
    },
    nextStep: {
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        borderColor: COLORS.orangeDark,
        borderWidth: 2
    },
    textNextStep: {
        color: COLORS.orangeDark,
        textAlign: "center",
        fontSize: 20,
        marginVertical: 3
    },


    //CHRONO
    chrono: {
        fontSize: 70,
        color: COLORS.blackLight,
        marginTop: 50
    },
    chronoIntensity: {
        fontSize: 17,
        textAlign: "center"
    },

    //BTN
    blocButton: {
        marginTop: 30
    },
    button: {
        backgroundColor: "#2a88e4",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 50
    },
    textButton: {
        fontSize: 30,
        color: "white"
    },
})