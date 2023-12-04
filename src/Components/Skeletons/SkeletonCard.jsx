import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
    return (
        
        <Skeleton className={"border shadow-lg h-72 relative p-4 flex flex-col justify-between gap-2 rounded-lg bg-white"}>
            <div className="flex justify-between items-center w-full">
                <Skeleton className={"w-40 h-6 rounded-md bg-slate-100/50"}> </Skeleton>
                <Skeleton className={"w-24 h-4 rounded-md bg-slate-100/50"}> </Skeleton>
            </div>
            <div className="h-[82px] w-full relative flex-col gap-1">
                <Skeleton className={"w-full h-1/2 rounded-md bg-slate-100/50"}> </Skeleton>
                <Skeleton className={"w-full h-1/2 rounded-md bg-slate-100/50"}> </Skeleton>
            </div>
            <Skeleton className="flex gap-3 w-full h-[34px] rounded-md bg-slate-50 filter backdrop-opacity-50">
                <Skeleton className={"h-full w-10 rounded-md bg-slate-200"}>

                </Skeleton>
                <Skeleton className={"h-full w-10 rounded-md bg-green-400/60"}>

                </Skeleton>
                <Skeleton className={"h-full w-10 rounded-md bg-red-500/60"}>

                </Skeleton>
                <Skeleton className={"h-full w-10 rounded-md bg-yellow-600/60"}>

                </Skeleton>                
            </Skeleton>
        </Skeleton>
    )
}
