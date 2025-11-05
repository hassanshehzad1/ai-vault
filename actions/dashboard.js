/**
 * The `createAccount` function in the JavaScript code snippet creates a new account for a user,
 * handles authorization, data validation, and updates existing account information.
 * @param account - The `createAccount` function you provided is responsible for creating a new account
 * for a user. It first checks if the user is authenticated, retrieves the user's information from the
 * database, and then creates a new account with the provided data.
 */
"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Seralize account as next js accept d not floating numbers
const serializeAccount = (account) => {
  const serialized = { ...account };

  if (account.balance) {
    serialized.balance = account.balance.toNumber();
  }

  if (account.amount) {
    serialized.amount = account.amount.toNumber();
  }

  return serialized;
};
export const createAccount = async (data) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    //   Converting balance to FLoating
    const balanceFloat = parseFloat(data.balance);

    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance amount");
    }

    const exitsingAccount = await db.account.findMany({
      where: { userId: user.id },
    });

    const isDefault = exitsingAccount.length === 0 ? true : data.isDefault;
    if (isDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: isDefault,
      },
    });

    const serializedAccount = serializeAccount(account);
    revalidatePath("/dashboard");

    return { success: true, data: serializedAccount };
  } catch (error) {
    console.error("Error creating account:", error);
    return { success: false, error: error.message };
  }
};

// Fetch all user accounts
export const getUserAccounts = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const accounts = await db.account.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: {
          transactions: true,
        },
      },
    },
  });

  const serializedAccounts = accounts.map(serializeAccount);
  return serializedAccounts;
};
