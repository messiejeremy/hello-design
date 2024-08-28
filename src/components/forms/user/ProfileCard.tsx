'use client'

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";
import { useAppSelector } from "@/src/store";
import Image from "next/image";

export const ProfileCard = () => {

  const user = useAppSelector(state => state.user);

  return (
    <Card className="flex flex-col justify-stretch items-stretch rounded-3xl shadow-lg p-4 w-6/12 h-4/6">
      <CardHeader className="flex flex-col flex-grow-[2] items-center h-full">
        <div className="flex items-center flex-grow-[2]">
          {user.photo
            ? <Image
              className="rounded-full h-36 w-36"
              src={user.photo}
              width={0}
              height={0}
              alt="user photo"
            />
            : <Skeleton className="bg-gray-200 rounded-full h-36 w-36" />
          }
        </div>
        <div className="flex flex-col flex-grow-[1] w-full">
          {(user.name) ? (
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
          ) : (
            <Skeleton className="h-2 w-16 mt-4 bg-gray-300" />
          )}
          {user.lastName ? (
            <p className="text-gray-500">{user.lastName}</p>
          ) : (
            <Skeleton className="h-2 w-24 mt-2 bg-gray-300" />
          )}
          {user.role ? (
            <p className="text-gray-500">{user.role}</p>
          ) : (
            <Skeleton className="h-2 w-24 mt-2 bg-gray-300" />
          )}
          {user.email ? (
            <p className="text-gray-500">{user.email}</p>
          ) : (
            <Skeleton className="h-2 w-24 mt-2 bg-gray-300" />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow-[1] mt-6 h-full">
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" />
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" />
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" />
      </CardContent>
    </Card>
  );
};
