import { connectDB } from '@/util/database'

export const revalidate = 60; // @NOTE: 60 초 동안 캐싱

export default async function Home() {

  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray();
  console.log(result)

  await fetch('/URL', { cache : 'no-store' })

  return (
    <div>안녕</div>
  )
}
