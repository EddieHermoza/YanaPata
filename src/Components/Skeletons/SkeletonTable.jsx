import { Skeleton } from "../ui/skeleton";

function SkeletonTable() {
    const count = 10;
    const skeletonArray = Array.from({ length: count }, (_, index) => index);

    return (
        <Skeleton className="flex flex-col gap-5 w-full h-[600px] justify-between items-center border bg-white">
            <div className="w-full flex flex-col gap-1">
                <Skeleton className={'w-full h-[40px] bg-slate-950 rounded-none'}/>
                {skeletonArray.map((c) => (
                    <Skeleton key={c} className={'w-full h-[40px] bg-slate-50 rounded-none'} />
                ))}
            </div>
            <div className="p-2">
                <Skeleton className={'w-[160px] h-12 bg-slate-100'}/>
            </div>
        </Skeleton>
    );
}

export default SkeletonTable;