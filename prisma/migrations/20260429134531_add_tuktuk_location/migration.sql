-- CreateTable
CREATE TABLE "TukTuk" (
    "id" SERIAL NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "name" TEXT,
    "policeStationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TukTuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "tukTukId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TukTuk_registrationNumber_key" ON "TukTuk"("registrationNumber");

-- CreateIndex
CREATE INDEX "TukTuk_policeStationId_idx" ON "TukTuk"("policeStationId");

-- CreateIndex
CREATE INDEX "Location_tukTukId_idx" ON "Location"("tukTukId");

-- CreateIndex
CREATE INDEX "Location_recordedAt_idx" ON "Location"("recordedAt");

-- AddForeignKey
ALTER TABLE "TukTuk" ADD CONSTRAINT "TukTuk_policeStationId_fkey" FOREIGN KEY ("policeStationId") REFERENCES "PoliceStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_tukTukId_fkey" FOREIGN KEY ("tukTukId") REFERENCES "TukTuk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
