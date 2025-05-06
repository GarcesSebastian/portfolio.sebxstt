"use client"

import { io, type Socket } from "socket.io-client";
import { useState, createContext, ReactNode, useContext, useEffect } from "react";

type SocketType = {
    socket: Socket | null
}

const SocketContext = createContext<SocketType | null>(null)

export const useSocket = () => {
    const context = useContext(SocketContext)
    if(!context){
        throw new Error("Must be use this hook useSocket")
    }

    return context;
}

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL, {
            transports: ["websocket"],
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
        });

        newSocket.on("connect", () => {
            console.log("connected to socket");
        });

        newSocket.on("disconnect", () => {
            console.log("disconnected from socket");
        });
        
        newSocket.on("error", (error) => {
            console.error("socket error", error);
        });

        console.log("Socket provider on")

        setSocket(newSocket)

        return () => {
            newSocket.disconnect()
        }
    },[])

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}