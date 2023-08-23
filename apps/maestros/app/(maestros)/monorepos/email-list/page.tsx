import { prisma } from '@repo/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '#/app/api/auth/[...nextauth]/route';

export const revalidate = 0;

const Page = async () => {
  const session = await getServerSession(authOptions);

  const isAnthony = session?.user?.email === 'anthonyshew@gmail.com';

  if (!isAnthony) {
    throw new Error("You're not Anthony!");
  }

  const peeps = await prisma.user.findMany();
  const emails = peeps.map((peep) => peep.email);

  return (
    <div>
      <pre>{JSON.stringify(emails, null, 2)}</pre>
    </div>
  );
};

export default Page;
