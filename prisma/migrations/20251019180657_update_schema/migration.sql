/*
  Warnings:

  - You are about to drop the column `description` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `content` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TestimonialStatus" AS ENUM ('APPROVE', 'REJECTED', 'NEW');

-- CreateEnum
CREATE TYPE "ShowAtType" AS ENUM ('PLANTATION', 'GROUP', 'TOURS');

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "description",
ADD COLUMN     "content" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "showAt" "ShowAtType"[];

-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "status" "TestimonialStatus" NOT NULL DEFAULT 'NEW';
