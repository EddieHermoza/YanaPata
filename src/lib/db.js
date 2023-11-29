import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () =>{
    return new PrismaClient()
}

const GlobalForPrisma = globalThis;

const prisma = GlobalForPrisma.prisma ?? PrismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== "production") GlobalForPrisma.prisma=prisma;

