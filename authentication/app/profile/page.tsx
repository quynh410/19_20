import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function page() {
  //   const { userId } = auth();
  //   if (userId) {
  //   }
  const user = await currentUser();
  return (
    <div>
      <h1>
        Họ và tên : {user?.firstName} {user?.lastName}
      </h1>
      <h1>Email : {user?.emailAddresses[0].emailAddress}</h1>
      <img width={200} height={200} src={user?.imageUrl} alt="" />
    </div>
  );
}
