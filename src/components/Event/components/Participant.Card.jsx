import BaseCard from "@/components/shared/BaseCard"

export const ParticipantCard = ({name}) => {
    return (
        <BaseCard className="border border-gray-200 gap-2 flex flex-col items-center justify-center">
            <img src="https://randomuser.me/api/portraits/men/36.jpg" className="w-14 h-14 rounded-full" />
            <p>{name}</p>
        </BaseCard>
    )
}