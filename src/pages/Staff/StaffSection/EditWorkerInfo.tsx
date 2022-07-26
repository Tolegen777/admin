import React, {useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import * as yup from 'yup';
import {useTypedSelector} from "../../../redux/store";
import {useFormik} from "formik";
import WorkerProfileForm from "./StaffHelperComponents/WorkerProfileForm";
import {useGetOneStaffQuery} from "../../../redux/store/rtk-api/staff-rtk/staffEndpoints";
import {useUpdateProfileMutation} from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";
import CustomAlert from "../../../components/reusedComponents/CustomAlert";

type Props = {
    handleSubmitWorkerData: any
}

export const convertDate = (date: string) => {
    let arr = []
    arr[0] = date.slice(9, 11)
    arr[1] = date.slice(6, 8)
    arr[2] = date.slice(1, 5)
    return arr.join("-")
}

const EditWorkerInfo: React.FC<Props> = ({handleSubmitWorkerData}) => {
    debugger
    const [open, setOpen] = useState(false)

    const profileId = useTypedSelector(state => state.profile.id)

    const {data: profileData,refetch} = useGetOneStaffQuery(profileId as number)
    const [updateProfile, {isLoading, isError, isSuccess}] = useUpdateProfileMutation()

    const [date, setDate] = React.useState<Date | null>(null);
    const validationSchema = yup.object({
    });


    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            firstName: profileData ? profileData.firstName : '',
            secondName: profileData ? profileData?.secondName:'',
            middleName: profileData ? profileData.middleName : '',
            iin: profileData ? profileData.iin : '',
            date: profileData ? profileData.date : '',
            phone: profileData ? profileData?.user.phone : '',
            cityId: profileData ? profileData?.place?.city?.id : '',
            street: profileData ? profileData?.place.street : '',
            building: profileData ? profileData?.place.building : '',
            floor: profileData ? profileData?.place.floor : '',
            apartment: profileData ? profileData?.place.apartment : '',
            index: profileData ? profileData?.place.index : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const obj = {
                firstName: values.firstName,
                secondName: values.secondName,
                middleName: values.middleName,
                cityId: values.cityId,
                street: values.street,
                building: values.building,
                floor: values.floor,
                apartment: values.apartment,
                index: values.index
            }
            updateProfile(obj)
        },
    });



    useEffect(() => {
        if (formik.values.date) {
            // @ts-ignore
            setDate(formik.values.date)
        }

    }, [formik.values.date])

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [open]);


    const handleSubmitOnClick = () => {
        // @ts-ignore
        formik.handleSubmit(formik.values)
    }

    useEffect(() => {
        // @ts-ignore
        handleSubmitWorkerData.current = handleSubmitOnClick
    }, [])

    useEffect(() => {
        if (isError || isSuccess) {
            setOpen(true)
        }
    }, [isSuccess, isError])

    const handleSet = (value: any) => {
        setDate(value)
        formik.setFieldValue('date', (convertDate(JSON.stringify(value))), false)
    }


    return (
        <>
            {open && isSuccess && <CustomAlert status={"success"} message={"Успех!!"}
                                               title={"Профиль успешно обновлен!"}/>}
            {open && isError &&
                <CustomAlert status={"error"} message={"Произошла ошибка!"} title={"Произошла ошибка!"}/>}
            {isLoading && <CircularProgress/>}

            <WorkerProfileForm formik={formik} date={date} handleSet={handleSet} mainText={"Мой профиль"} isEdit={true}
                               isDisabled={true}/>
        </>
    );
};

export default EditWorkerInfo;



