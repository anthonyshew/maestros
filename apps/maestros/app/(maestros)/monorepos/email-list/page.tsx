import { getServerSession } from "next-auth";
import { prisma } from "@repo/db";
import { authOptions } from "#/app/api/auth/[...nextauth]/route";

export const revalidate = 0;

const Page = async () => {
	const session = await getServerSession(authOptions);
	const isAnthony = session?.user?.email === "anthonyshew@gmail.com";

	if (!isAnthony) {
		throw new Error("You're not Anthony!");
	}

	const peeps = await prisma.user.findMany();
	const emails = peeps.map((peep) => peep.email);

	return (
		<main className="relative flex flex-col justify-start overflow-x-hidden flex-auto h-[calc(100vh-3.5rem)] px-8 py-8 md:px-12 overflow-auto mt-14 sm:py-8 lg:py-14">
			<p>Count: {emails.length}</p>
			<pre>{JSON.stringify(emails, null, 2)}</pre>
		</main>
	);
};

export default Page;
