import { PrismaClient } from "@prisma/client";

let prism;

const PrismaClientSingleton = () =>{
    if (!prism) {
        prism = new PrismaClient();
    }
    return prism;
}

const GlobalForPrisma = globalThis;

const prisma = GlobalForPrisma.prisma ?? PrismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== "production") GlobalForPrisma.prisma=prisma;

