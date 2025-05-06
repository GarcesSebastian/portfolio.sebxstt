"use client"

import { Experience } from "@/types/Experiences";
import { Project } from "@/types/Projects";
import { Service } from "@/types/Services";
import { Skill } from "@/types/Skills";
import { Testimonial } from "@/types/Testimonials";
import { useState, createContext, ReactNode, useContext, useEffect } from "react";

type Data = {
    projects: Project[],
    experiences: Experience[],
    services: Service[],
    skills: Skill[],
    testimonials: Testimonial[],
}

type DataContextType = {
    data: Data,
    setData: React.Dispatch<React.SetStateAction<Data>>
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext)
    if(!context){
        throw new Error("Must be use this hook useData")
    }

    return context;
}

const DataDefault: Data = {
    projects: [],
    experiences: [],
    services: [],
    skills: [],
    testimonials: [],
}

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data>(DataDefault);

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        const data = await response.json();

        if(!response.ok){
            throw new Error(data.error || "Error with fetch")
        }

        setData(data)
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}