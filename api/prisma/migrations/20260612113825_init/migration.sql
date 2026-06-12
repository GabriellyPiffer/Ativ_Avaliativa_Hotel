-- CreateTable
CREATE TABLE `quarto` (
    `numero` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `descrição` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`numero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hospede` VARCHAR(191) NOT NULL,
    `entrada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `saida` DATETIME(3) NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reserva` ADD CONSTRAINT `reserva_numero_fkey` FOREIGN KEY (`numero`) REFERENCES `quarto`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;
