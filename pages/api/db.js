// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/mongodb";
import Breed from "../../utils/models/breed";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const breeds = await Breed.find();
    return response.status(200).json(breeds);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
