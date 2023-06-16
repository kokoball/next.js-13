export default async function handler(res, req) {
    let date = new Date();
    return req.status(200).json(date);
}