import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://redes2:redes2@cluster0.lypj5.mongodb.net/?retryWrites=true&w=majority";
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
