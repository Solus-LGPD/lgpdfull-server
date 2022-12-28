import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash(process.env.SEED_TEST_ADMIN, 10);
    const adminTest = await prisma.user.upsert({
        create: {
            company_name: 'Solus',
            email: 'admin@teste.com',
            first_name: 'Solus',
            last_name: 'IT',
            pass: password,
            is_admin: true,
        },
        where: {
            email: 'admin@teste.com'
        },
        update: {}
    });
    adminTest.pass = undefined;
    console.log(adminTest);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});