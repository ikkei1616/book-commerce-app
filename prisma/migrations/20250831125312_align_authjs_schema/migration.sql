/*
  Warnings:

  - You are about to drop the column `accessToken` on the `Session` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Session_accessToken_key";

-- AlterTable
ALTER TABLE "public"."Session" DROP COLUMN "accessToken";
