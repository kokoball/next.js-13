import { ObjectId } from "mongodb"
import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let temp = {title : req.body.title, body : req.body.content}

        const db = (await connectDB).db('forum')
        let result = await db.collection('post').updateOne(
            { _id: new ObjectId(req.body._id) },
            { $set: temp })
        res.redirect(302, '/list')
        
        // return res.status(200).redirect(302, '/list')
    }
}