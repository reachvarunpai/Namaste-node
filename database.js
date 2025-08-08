const { MongoClient } = require("mongodb");

const url =
    "mongodb+srv://namastedev:SQBhRVWHDKLsaa8W@namastenode.589b2qv.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected Successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        firstname: "Virat",
        lastname: "Kholi",
        city: "Dheli",
        phoneNumber: "1818181818",
    };

    const insertResult = await collection.insertMany([data]);;
    console.log("Inserted Documents =>", insertResult);

    const findResult = await collection.find({}).toArray();
    console.log("Found Documents =>", findResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());