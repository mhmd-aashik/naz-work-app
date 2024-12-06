interface CreateUserParams {
  clerkId: string;
  role?: "admin" | "user";
  username: string;
  name: string;
  password?: string;
  picture: string;
  email: string;
}
