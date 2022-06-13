import {createSlice} from "@reduxjs/toolkit";

interface IInitState {
    isShowPrevButton: boolean,
    isOneUserMessage: boolean,
    id: number | null,
    firstName: string,
    secondName: string,
    middleName: string,
    date: string | null,
    phone: number | null
    complaintId: number | null
    complaintStatus: string,
    messageText: string,
    reporter: {
        firstName: string | null
        middleName: string | null
        secondName: string | null

    },
    comment: string | null


}

const initialState: IInitState = {
    isShowPrevButton: false,
    isOneUserMessage: false,
    id: null,
    firstName: '',
    secondName: '',
    middleName: '',
    date: null,
    phone: null,
    complaintId: null,
    complaintStatus: '',
    messageText: '',
    reporter: {
        firstName: '',
        middleName: '',
        secondName: '',
    },
    comment: ''

}

const complaintSlice = createSlice({
    name: 'complaint/',
    initialState,
    reducers: {

        setButtonVisibility: (state, {payload}) => {
            state.isShowPrevButton = payload
        },
        setOneUserMessageVisibility: (state, {payload}) => {
            state.isOneUserMessage = payload
        },
        setComplainedUserData: (state, {payload}) => {
            // debugger
            if (payload.culprit?.id) {
                state.id = payload.culprit.id
            }
            if (payload.culprit?.firstName) {
                state.firstName = payload.culprit.firstName
            }
            if (payload.culprit?.secondName) {
                state.secondName = payload.culprit.secondName
            }
            if (payload.culprit?.middleName) {
                state.middleName = payload.culprit.middleName
            }
            if (payload.culprit?.date) {
                state.date = payload.culprit.date
            }
            if (payload.message?.text) {
                state.messageText = payload.message.text
            }
            if (payload.reporter && payload.reporter.firstName != null) {
                state.reporter.firstName = payload.reporter?.firstName
            }
            if (payload.reporter && payload.reporter.middleName != null) {
                state.reporter.middleName = payload.reporter?.middleName
            }
            if (payload.reporter && payload.reporter.secondName != null) {
                state.reporter.secondName = payload.reporter?.secondName
            }
            if (payload.text) {
                state.comment = payload.text
            }


            state.complaintId = payload.id
            state.complaintStatus = payload.status

        },
        setAdditionalUserData: (state, {payload}) => {
            //  debugger
            if (payload.phone) {
                state.phone = payload.phone
            }

        },
        setComplainedStatus: (state, {payload}) => {

            state.complaintStatus = payload


        }


    }
})

export const {
    setButtonVisibility,
    setOneUserMessageVisibility,
    setComplainedUserData,
    setAdditionalUserData,
    setComplainedStatus
} = complaintSlice.actions

export default complaintSlice.reducer