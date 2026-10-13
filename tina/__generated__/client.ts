import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '899960135474c4642aa384fc5b627b7634beacd5', queries,  });
export default client;
  