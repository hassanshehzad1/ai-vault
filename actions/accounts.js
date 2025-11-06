"use-server"
// Serialzie

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { success } from "zod";

const serializeTransactions = (accounts) => {
  const serialized = { ...accounts };

  if (accounts.balance) {
    serialized.balance = accounts.balance.toNumber();
  }

  if (accounts.amount) {
    serialized.amount = accounts.amount.toNumber();
  }

  return serialized;
};

export async function updateDefaultAccount(accountId) {
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

    await db.account.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });

    const account = await db.account.update({
      where: { id: accountId, userId: user.id },
      data: { isDefault: true },
    });
    revalidatePath("/dashboard");

    return { success: true, data: serializeTransactions(account) };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
