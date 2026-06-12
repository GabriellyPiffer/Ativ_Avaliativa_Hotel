/*
  Warnings:

  - You are about to drop the column `descrição` on the `quarto` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `quarto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `quarto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quarto` DROP COLUMN `descrição`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagem` VARCHAR(191) NOT NULL;
