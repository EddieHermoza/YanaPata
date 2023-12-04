import { Skeleton } from "../ui/skeleton"

export default function SkeletonContainer() {
    return (
        <div className="relative w-full h-full flex-col flex items-center gap-5">
            <div className="flex flex-wrap max-md:flex-col w-full max-md:items-start md:items-center sm:justify-evenly gap-10 mx-auto">
                <Skeleton className={"w-72 h-8 rounded-md bg-slate-100"}></Skeleton>
                <Skeleton className={" max-sm:w-full sm:w-72 h-8 rounded-md bg-slate-100"}></Skeleton>
                <Skeleton className={"max-sm:w-full sm:w-72 h-8 rounded-md bg-slate-100"}></Skeleton>
            </div>
            <Skeleton className={"w-40 h-10 rounded-md bg-slate-100"}></Skeleton>
            <Skeleton className=" flex-col items-center flex gap-5 max-w-[1000px] w-full relative mx-auto h-full bg-slate-100">

            </Skeleton>
        </div>
    )
}
