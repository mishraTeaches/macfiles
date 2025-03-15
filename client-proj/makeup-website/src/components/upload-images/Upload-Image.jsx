// src/utils/uploadImage.js
import { supabase } from "../../supabaseClient";

export const uploadImage = async (file) => {
  const user = supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const filePath = `${file.name}`; // Organize by user ID

  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, file, {
      upsert: false,
      cacheControl: "3600",
      contentType: file.type,
      metadata: {
        owner: user.id,
      },
    });

  if (error) {
    throw error;
  }

  return data;
};
