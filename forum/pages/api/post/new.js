import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.title === '') {
            return res.statue(500).json('너 왜 제목 안씀?')
        }
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(req.body)
            return res.status(200).redirect(302, '/list')
        } catch (err) {
            console.log(err, '엥 실패')
        }
    }
    console.log(req);
}