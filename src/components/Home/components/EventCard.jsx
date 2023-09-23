"use client"
import BaseCard from "@/components/shared/BaseCard"
import Link from "next/link"

export const EventCard = ({id,name,date}) => {
    return (
        <Link href={`event/${id}`}>
            <BaseCard className="border border-gray-100">
                <img src="/images/hero-card-complete.jpeg" className="h-32 object-cover object-center w-full rounded-md mb-4" />
                <h3 className="font-semibold">{name}</h3>
                <p>{date}</p>
            </BaseCard>
        </Link>
    )
}