import React, {useEffect, useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {commonColors} from "../../../common_styles/commonStyles";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";
import {useNavigate} from "react-router-dom";
import OneUserMessage from "./OneUserMessage";

interface IMessage {
    id: number,
    img: string,
    userName: string,
    statusDescription: string,
    time: string
}

const messages = [
    {
        id: 1,
        img: "",
        userName: "Marat",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 2,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 3,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 4,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 5,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 6,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    }
]

const UserMessageCard = React.memo(() => {
    const navigate = useNavigate()
    const bottomRef = React.useRef<HTMLDivElement>(null);

    const [messageData, setMessageData] = useState<IMessage>()

    const showMessagePageWithData = (message: IMessage) => {
        setMessageData(message)
    }

    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };

    useEffect(() => {
        scrollToBottom()
    }, [])

    return (
        <>
            {
                messageData ? <OneUserMessage message={messageData}/> :
                    <Box sx={{
                        backgroundColor: commonColors.secondary,
                        overflowY: 'scroll',
                        scrollBehavior: 'smooth',
                        height: "300px"
                    }}>
                        {messages.map(message => {
                                if (!messageData) {

                                    return <Grid container key={message.id} sx={{border: "10px solid #fff"}}
                                                 onClick={() => showMessagePageWithData(message)}>
                                        <Grid item xs={1.2}><img src={message.img ? message.img : userPhoto}
                                                                 alt="user avatar"
                                                                 style={{
                                                                     width: "60px",
                                                                     height: "60px",
                                                                     border: "10px solid #E4FFF9"
                                                                 }}
                                        /></Grid>
                                        <Grid item xs={9.8} sx={{padding: "10px 0px"}}>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "800",
                                                    marginTop: "5px"
                                                }}>{message.userName}</Typography>
                                            <Typography sx={{
                                                fontSize: "12px",
                                                fontWeight: "200",
                                                marginTop: "5px",
                                                color: "#B1B1B1"
                                            }}>{message.statusDescription}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sx={{
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            marginTop: "15px",
                                            color: "#999999"
                                        }}>{message.time}</Grid>

                                    </Grid>
                                }


                            }
                        )}
                        <div ref={bottomRef}></div>
                    </Box>
            }


        </>

    )
})

export default UserMessageCard