import { getToken } from "next-auth/jwt";
import { getAlbums } from "../../../server-lib/photos/getAlbums";

const secret = process.env.SECRET;
let accessToken;

export default async (req, res) => {
  const token = await getToken({ req, secret });
  accessToken = token.accessToken;

  const data = await getAlbums({ token: accessToken, pageSize: 10 });

  res.status(200).send(data);
};
