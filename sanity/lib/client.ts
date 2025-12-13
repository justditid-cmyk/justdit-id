import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for development and fresh content
  perspective: "published",
  stega: {
    enabled: false,
  },
});
