import { DetailEvent } from '@/components/Event/components/Detail.Event'
import { http } from '@/lib/http'

export default async function Page({ params }) {
  const event_id = params.event_id
  const { data } = await http(`event/${event_id}`, 'GET')

  return <DetailEvent detail={data} event_id={event_id}/>
}
