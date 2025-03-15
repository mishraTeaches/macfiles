import { supabase } from "../../supabaseClient"; // Make sure to import your Supabase client

// Define your fetchImages function (Make sure it works correctly)
export const fetchImages = async () => {
  const bucketName = "images";
  const { data, error } = await supabase.storage.from(bucketName).list("", {
    limit: 100,
    offset: 0,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
