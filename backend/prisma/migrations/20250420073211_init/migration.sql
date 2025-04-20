-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaf" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Leaf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeafLink" (
    "id" TEXT NOT NULL,
    "sourceLeafId" TEXT NOT NULL,
    "targetLeafId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeafLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LeafLink_sourceLeafId_targetLeafId_key" ON "LeafLink"("sourceLeafId", "targetLeafId");

-- AddForeignKey
ALTER TABLE "Leaf" ADD CONSTRAINT "Leaf_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeafLink" ADD CONSTRAINT "LeafLink_sourceLeafId_fkey" FOREIGN KEY ("sourceLeafId") REFERENCES "Leaf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeafLink" ADD CONSTRAINT "LeafLink_targetLeafId_fkey" FOREIGN KEY ("targetLeafId") REFERENCES "Leaf"("id") ON DELETE CASCADE ON UPDATE CASCADE;
