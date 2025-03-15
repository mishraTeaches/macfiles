const handleSignUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error("Sign up failed:", error.message);
  } else {
    console.log("Signed up:", user);
  }
};
