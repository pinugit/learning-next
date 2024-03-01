/*
  Warnings:

  - You are about to drop the column `in_Stock` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `in_Stock`,
    ADD COLUMN `inStock` BOOLEAN NOT NULL DEFAULT false;
