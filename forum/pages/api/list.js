import { connectDB } from "@/util/database"

export default async function handler(res, req) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray();

    return req.status(200).json(result);
}