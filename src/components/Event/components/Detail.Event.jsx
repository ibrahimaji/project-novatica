"use client"

import BaseCard from "@/components/shared/BaseCard"
import Button from "@/components/shared/Button"
import { ParticipantCard } from "./Participant.Card"

export const DetailEvent = ({detail}) => {
    return (
        <div className="px-20 pb-20 mt-4">
            <img src="/images/hero-card-complete.jpeg" alt="" className="w-full h-[500px] object-cover object-center rounded-md" />
            <div className="mt-12 grid grid-cols-12 relative gap-x-8">
                <div className="col-span-8 space-y-8">
                    <h1 className="text-4xl font-bold">{detail.name}</h1>
                    <div className="bg-gray-50 p-4 flex items-center gap-4 rounded-md">
                        <img src="/images/profile-author.jpg" className="w-20 h-20 rounded-full object-cover" />
                        <div>
                            <h3 className="text-lg font-medium">{detail.name}</h3>
                            <p className="text-sm">Joined At {detail.createdAt.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">Summary</h2>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            {detail.location}
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                            {detail.date}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">About this event</h2>
                        <p>
                            {detail.description}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">Participants</h2>
                    </div>
                </div>
                <div className="col-span-4 relative">
                    <BaseCard className="border border-gray-200 w-full sticky top-4">
                        <p className="text-center mb-2">Free</p>
                        <Button variant="primary">Make Appoinment</Button>
                    </BaseCard>
                </div>
            </div>
        </div>
    )
}