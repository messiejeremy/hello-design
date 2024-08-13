import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

export const ProfileCard = () => {
  return (
    <Card className="flex flex-col justify-stretch items-stretch rounded-3xl shadow-lg p-4 w-6/12 h-4/6">
      <CardHeader className="flex flex-col flex-grow-[2] items-center h-full">
        <div className="flex items-center flex-grow-[2]">
          <div className="bg-gray-200 rounded-full h-36 w-36"></div> {/* Círculo */}
        </div>
        <div className="flex flex-col flex-grow-[1] ">
          <Skeleton className="h-2 w-16 mt-4 bg-gray-300" /> {/* Línea de texto corta */}
          <Skeleton className="h-2 w-24 mt-2 bg-gray-300" /> {/* Línea de texto más larga */}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow-[1] mt-6 h-full">
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" /> {/* Input-like */}
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" /> {/* Input-like */}
        <Skeleton className="h-1/3 w-full mb-4 rounded-md bg-gray-200" /> {/* Input-like */}
      </CardContent>
    </Card>
  );
};
