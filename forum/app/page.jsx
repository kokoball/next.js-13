import { connectDB } from '@/util/database'

// export const revalidate = 60; // @NOTE: 60 초 동안 캐싱, 페이지 단위로 캐싱

export default async function Home() {

  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray();
  console.log(result)

  // await fetch('/URL', { cache : 'force-cache' }) // 캐싱, 뒤에 파라미터 없어도 ㄱㅊ
  // await fetch('/URL', { cache: 'no-store' }) // 캐싱 안함, 실시간 데이터 중요할때
  // await fetch('/URL', {next : {revalidate: 60}}) // 60 초마다 캐싱 
  

  return (
    <div>안녕</div>
  )
}
