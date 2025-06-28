-- CreateTable
CREATE TABLE "User" (
    "is" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("is")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
