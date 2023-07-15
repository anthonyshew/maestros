import { buildNavigationGroups } from "#/app/(maestros)/contentHandlers";

const Page = () => {
  return <pre>{JSON.stringify(buildNavigationGroups(), null, 2)}</pre>;
};

export default Page;
