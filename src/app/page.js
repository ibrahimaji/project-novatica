import { AppHome } from '@/components/Home/components/AppHome'
import { http } from '@/lib/http'

export default async function Home() {
  const { data } = await http('event', 'GET')

  return <AppHome events={data} />
}
