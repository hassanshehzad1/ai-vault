/**
 * The function `checkUser` checks if a user is logged in, retrieves user information, and creates a
 * new user in the database if the user is not found.
 * @returns The `checkUser` function returns either the existing user if found in the database, a newly
 * created user if not found, or `null` if there is an error or if the current user is not
 * authenticated.
 */
import { currentUser } from "@clerk/nextjs/server";
import { db } from "../prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    console.log('Checking user with clerkUserId:', user.id);
    const loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const email = user.emailAddresses[0]?.emailAddress || "no-email@example.com";

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error.message);
    return null;
  }
};