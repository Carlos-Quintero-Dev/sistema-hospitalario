-- CreateTable
CREATE TABLE "Consulta" (
    "id_consulta" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "diagnostico" TEXT NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id_consulta")
);

-- CreateTable
CREATE TABLE "Hospitalizacion" (
    "id_hospitalizacion" SERIAL NOT NULL,
    "fecha_entrada" TIMESTAMP(3) NOT NULL,
    "fecha_salida" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hospitalizacion_pkey" PRIMARY KEY ("id_hospitalizacion")
);

-- CreateTable
CREATE TABLE "Departamentos" (
    "id_dapartamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Departamentos_pkey" PRIMARY KEY ("id_dapartamento")
);

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id_ubicacion" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id_ubicacion")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id_doctor" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "departamentoID" INTEGER NOT NULL,
    "ubicacionID" INTEGER NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id_doctor")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id_paciente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "ubicacionID" INTEGER NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "Historia_clinica" (
    "id_historiaClinica" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "doctorID" INTEGER NOT NULL,
    "pacienteID" INTEGER NOT NULL,
    "consultaID" INTEGER NOT NULL,
    "hospitalizacionID" INTEGER NOT NULL,

    CONSTRAINT "Historia_clinica_pkey" PRIMARY KEY ("id_historiaClinica")
);

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_departamentoID_fkey" FOREIGN KEY ("departamentoID") REFERENCES "Departamentos"("id_dapartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_ubicacionID_fkey" FOREIGN KEY ("ubicacionID") REFERENCES "Ubicacion"("id_ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_ubicacionID_fkey" FOREIGN KEY ("ubicacionID") REFERENCES "Ubicacion"("id_ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historia_clinica" ADD CONSTRAINT "Historia_clinica_doctorID_fkey" FOREIGN KEY ("doctorID") REFERENCES "Doctor"("id_doctor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historia_clinica" ADD CONSTRAINT "Historia_clinica_pacienteID_fkey" FOREIGN KEY ("pacienteID") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historia_clinica" ADD CONSTRAINT "Historia_clinica_consultaID_fkey" FOREIGN KEY ("consultaID") REFERENCES "Consulta"("id_consulta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historia_clinica" ADD CONSTRAINT "Historia_clinica_hospitalizacionID_fkey" FOREIGN KEY ("hospitalizacionID") REFERENCES "Hospitalizacion"("id_hospitalizacion") ON DELETE RESTRICT ON UPDATE CASCADE;
