import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jellyfin_demo");

  switch (req.method) {
    case "POST":
      let user = await db.collection("users").insertOne(req.body);
      res.status(200).json(user);

      break;
    case "GET":
      const allUsers = await db.collection("users").find({}).toArray();
      res.json({ status: 200, data: allUsers });
      break;
  }
}
