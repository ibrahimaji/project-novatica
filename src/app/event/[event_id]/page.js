import { DetailEvent } from '@/components/Event/components/Detail.Event'

export default function Page({ params }) {
  const event_id = params.event_id
  return <DetailEvent />
}
