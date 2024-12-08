import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpando DB antes de popular, se existirem dados
  await prisma.coleta.deleteMany();
  await prisma.enderecosLocal.deleteMany();
  await prisma.enderecosUsuario.deleteMany();
  await prisma.usuario.deleteMany();

  // Usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: 'Usuario 1',
      login: 'user1@mail.com',
      numeroCelular: '11 9999-9999',
      senha: '123456',
      tipoUsuario: 'cidadao',
    },
  });
  const usuario2 = await prisma.usuario.create({
    data: {
      nome: 'Usuario 2',
      login: 'user2@mail.com',
      numeroCelular: '11 9999-9999',
      senha: '123456',
      tipoUsuario: 'cidadao',
    },
  });

  // Endereços de Usuários
  const enderecoUsuario1 = await prisma.enderecosUsuario.create({
    data: {
      rua: 'Rua 1',
      numero: 1,
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      cep: '99999-999',
      usuarioId: usuario1.id,
    },
  });
  const enderecoUsuario2 = await prisma.enderecosUsuario.create({
    data: {
      rua: 'Rua 2',
      numero: 2,
      complemento: 'Complemento 2',
      bairro: 'Bairro 2',
      cidade: 'Cidade 2',
      estado: 'Estado 2',
      cep: '99999-999',
      usuarioId: usuario2.id,
    },
  });

  // Endereços Locais
  const enderecoLocal1 = await prisma.enderecosLocal.create({
    data: {
      rua: 'Rua 1',
      numero: 1,
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      cep: '99999-999',
    },
  });
  const enderecoLocal2 = await prisma.enderecosLocal.create({
    data: {
      rua: 'Rua 2',
      numero: 2,
      complemento: 'Complemento 2',
      bairro: 'Bairro 2',
      cidade: 'Cidade 2',
      estado: 'Estado 2',
      cep: '99999-999',
    },
  });

  // Coletas
  const coleta1 = await prisma.coleta.create({
    data: {
      usuarioId: usuario1.id,
      dataColeta: new Date(),
      peso: 10,
      volume: 10,
      enderecoId: enderecoLocal1.id,
      status: 'pendente',
      tipo: 'papel',
    },
  });
  const coleta2 = await prisma.coleta.create({
    data: {
      usuarioId: usuario2.id,
      dataColeta: new Date(),
      peso: 20,
      volume: 20,
      enderecoId: enderecoLocal2.id,
      status: 'pendente',
      tipo: 'metal',
    },
  });

  console.log('Dados populados:', {
    usuario1,
    usuario2,
    enderecoUsuario1,
    enderecoUsuario2,
    enderecoLocal1,
    enderecoLocal2,
    coleta1,
    coleta2,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
