"use client"

import BaseCard from "@/components/shared/BaseCard"
import Button from "@/components/shared/Button"
import { ParticipantCard } from "./Participant.Card"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import Input from "@/components/shared/Input";
import { useState } from "react";
import { http } from "@/lib/http";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export const DetailEvent = ({detail,event_id}) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const route = useRouter()

    const [participantData, setParticipantData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleForm = (event) => {
        const {name,value} = event.target
        setParticipantData({ ...participantData, [name] : value, eventId: event_id })
    }

    const submitParticipant = async () => {
        try {
            await http("join-event", "POST", participantData)
            toast.success("success confirmation your attendance!")
        } catch (error) {
            toast.error("Something went wrong, please try again!")
        }
        onClose()
        route.refresh()
    }

    return (
        <div className="lg:px-20 md:px-12 pb-40 mt-4 relative">
            <img src="/images/hero-card-complete.jpeg" alt="" className="w-full h-[500px] object-cover object-center rounded-md lg:px-0 md:px-0 px-8" />
            <div className="mt-12 grid grid-cols-12 gap-x-8">
                <div className="lg:col-span-8 md:col-span-7 col-span-12 space-y-8  lg:px-0 md:px-0 px-8">
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
                        <div className="grid grid-cols-5 gap-4">
                            {
                                detail.participants.length != 0 ?
                                    detail.participants.map((participant) => {
                                        return <ParticipantCard name={participant.name}/>
                                    }) : <div className="col-span-5">No participant, please be first!</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 md:col-span-5 col-span-12 relative">
                    <BaseCard className="border border-gray-200 w-full lg:sticky md:sticky fixed lg:top-4 md:top-4 bottom-0">
                        <p className="text-center mb-2">Free</p>
                        <Button variant="primary" onClick={onOpen}>Make Appoinment</Button>
                    </BaseCard>

                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Fill up your information</ModalHeader>
                                    <ModalBody className="space-y-2">
                                        <div className="space-y-2">
                                            <label
                                                className="block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Fullname
                                            </label>
                                            <Input type="text" name="name" placeholder="Jojon Doel" onChange={handleForm}/>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Email
                                            </label>
                                            <Input type="email" name="email" placeholder="jojondol@example.com" onChange={handleForm} />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Phone
                                            </label>
                                            <Input type="number" name="phone" placeholder="08xxxxxxxxxx" onChange={handleForm} />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button variant="light" onClick={onClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={submitParticipant}>
                                            Submit
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={true}
                    />
                </div>
            </div>
        </div>
    )
}