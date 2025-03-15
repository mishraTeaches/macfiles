const getUserRole = async () => {
  const user = supabase.auth.user();
  const { data: userRole, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id);

  if (userRole && userRole.length > 0) {
    return userRole[0].role;
  }
  return "normal";
};
