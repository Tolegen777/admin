// library
import {Suspense, useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";

// pages
import HomeSection from "./HomeSection";

// main-Style
import {HeaderBlock, Poster} from "../mainStyle";

import {useGetHomeQuery} from "../../redux/store/rtk-api/home-rtk/homeEndpoints";
import {useGetMyProfileQuery} from "../../redux/store/rtk-api/profile-rtk/profileEndpoints";
import {setProfileId} from "../../redux/store/reducers/profile/profile.slice";
import {useDispatch} from "react-redux";

export default function Home() {
    const data = useGetHomeQuery("")
    const dispatch = useDispatch()


    const location = useLocation();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box>
            <HeaderBlock>
                <Poster>Главная</Poster>
            </HeaderBlock>
            <Suspense fallback={<div>Загрузка...</div>}>
                <HomeSection/>
                <div className="App">
                    {/*{data&&data.data&&<Chart chartData={obj} />}*/}

                </div>


            </Suspense>
        </Box>
    );
}
