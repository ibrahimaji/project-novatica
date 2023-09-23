"use client"
import Button from "@/components/shared/Button"
import { EventCard } from "./EventCard"
import { AppNavbar } from '@/components/shared/AppNavbar'

export const AppHome = ({events}) => {
    return (
        <div className="mb-20">
            <AppNavbar />
            <section className="h-[650px] flex justify-center items-center">
                <div className="max-w-lg">
                    <h1 className="text-center text-4xl font-bold mb-2">NOVATICA</h1>
                    <p className="text-center text-lg mb-8">
                        Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.
                    </p>
                    <Button variant="primary">Join NOVATICA</Button>
                </div>
            </section>
            <section className="px-36">
                <h1 className="text-xl mb-8">Events near <b>Jakarta,ID</b></h1>
                <div className="grid grid-cols-5 gap-4">
                    {
                        events.map((event) => {
                            console.log(event.name)
                            return <EventCard name={event.name} date={event.date} id={event.id}/>
                        })
                    }
                </div>
            </section>
        </div>
    )
}