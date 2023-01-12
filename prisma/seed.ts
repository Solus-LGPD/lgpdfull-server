import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash(process.env.SEED_TEST_ADMIN, 10);
    const adminTest1 = await prisma.user.upsert({
        create: {
            company_name: 'Solus',
            email: 'botelhocelso99@gmail.com',
            first_name: 'Solus',
            last_name: 'IT',
            pass: password,
            is_admin: true,
        },
        where: {
            email: 'botelhocelso99@gmail.com'
        },
        update: {}
    });
    const adminTest2 = await prisma.user.upsert({
        create: {
            company_name: 'Solus',
            email: 'marvmms@gmail.com',
            first_name: 'Solus',
            last_name: 'IT',
            pass: password,
            is_admin: true,
        },
        where: {
            email: 'marvmms@gmail.com'
        },
        update: {}
    });
    adminTest1.pass = undefined;
    adminTest2.pass = undefined;
    console.log(adminTest1);
    console.log(adminTest2);
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