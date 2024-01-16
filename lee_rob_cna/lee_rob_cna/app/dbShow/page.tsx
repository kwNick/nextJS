// "use client";
import {Suspense} from 'react';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://404hero:mongo12345@helloworld.wtjmfwx.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// type Movies = {
//   title: string;
//   plot: string;
//   year: number;
// };
async function Data(){
  // await client.connet();
  const db = await client.db("sample_mflix");
  const col = await db.collection('movies');
  const query = {title: 'Back to the Future'};
  const results = await col.findOne(query);
  const results_2 = await col.findOne({title: "The Great Train Robbery"});
  // const list = await col.find({year: {$gt: 1985}}).limit(3);
  const list_2 = await col.aggregate([{"$match": {"year": {"$gt": 1985}}},{"$limit": 5}]);
  // console.log(await list.toArray());
  // for await (const document of list) {
  //   console.log(document);
  // }
  // console.dir;
  return(
    // results
    <>
    <h1>help!</h1>
    <hr/>
    <p className="underline">{results.title}</p>
    <p>{results.plot}</p>
    <p>{results.cast.join(" ")}</p>
    <hr/>
    <section>
      {[results_2].map(
        (res,idx) => (
          <div key={idx}>
          <h1 className="underline">{res.title}</h1>
          <h1>{res.plot}</h1>
          </div>
        )
      )}
    </section>
    <hr/>
    <section>
      <p>Query Results:</p>
      <p>{JSON.stringify(results)}</p>
    </section>
    {/* <section>
      <p>Query Results:</p>
      <p>{JSON.stringify(list_3)}</p>
    </section> */}
    <section>
      <p>{JSON.stringify(list_2)}</p>
          {/* {[list].map(
            (x, idx) => (
            <div key={idx}>
              <h1>{x.title}</h1>
              <h2>{x.plot}</h2>
              <h2>{x.year}</h2>
            </div>
          ))} */}
    </section>
    </>
  );
}
export default function Page(){
  return (
    <section>
      <h1 className="text-2xl font-smibold text-blue-300">HelloWorld DB!!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Data />
      </Suspense>
    </section>
    
  );
}