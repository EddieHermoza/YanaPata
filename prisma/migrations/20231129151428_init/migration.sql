-- CreateTable
CREATE TABLE `Servicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `descrip` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL DEFAULT 'Pendiente',
    `estado` VARCHAR(191) NOT NULL DEFAULT 'Habilitado',
    `precio_min` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `apellidos` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL DEFAULT 'Habilitado',

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cliente_usuario_id_key`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mascota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `cliente_id` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `raza` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `altura` VARCHAR(191) NOT NULL,
    `peso` DECIMAL(10, 2) NULL,
    `ultima_cita` DATETIME(3) NOT NULL,
    `foto` VARCHAR(191) NOT NULL DEFAULT 'Pendiente',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `fechaSolicitud` VARCHAR(191) NOT NULL,
    `horaSolicitud` VARCHAR(191) NOT NULL,
    `nombreMascota` VARCHAR(191) NOT NULL,
    `nombreCliente` VARCHAR(191) NOT NULL,
    `ClienteInfo` JSON NULL,
    `MascotaInfo` JSON NULL,
    `cliente_id` INTEGER NULL,
    `mascota_id` INTEGER NULL,
    `servicio_id` INTEGER NOT NULL,
    `asunto` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL DEFAULT 'PENDIENTE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificacion` DATETIME(3) NOT NULL,
    `confirmacion` DATETIME(3) NOT NULL,
    `calificacion` INTEGER NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL DEFAULT 'Habilitado',
    `servicio_id` INTEGER NOT NULL,
    `cliente_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mascota` ADD CONSTRAINT `Mascota_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_mascota_id_fkey` FOREIGN KEY (`mascota_id`) REFERENCES `Mascota`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_servicio_id_fkey` FOREIGN KEY (`servicio_id`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_servicio_id_fkey` FOREIGN KEY (`servicio_id`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
