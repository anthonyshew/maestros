import { GitFork, Star, Box, Globe, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/Avatar";
import { IconBox } from "#/components/IconBox";
import { firaCode } from "#/app/fonts";

const logos = {
  kittr:
    "https://pbs.twimg.com/profile_images/1419807359589699590/rpRA-bIC_400x400.jpg",
  turbo:
    "https://pbs.twimg.com/profile_images/1584620135490338816/tCCcROZD_400x400.png",
  trpc: "https://pbs.twimg.com/profile_images/1562943276142960640/8Fo_MxSb_400x400.jpg",
};

export type PinnedRepos = {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
};

const IconLine = ({ icon, stat }: { icon: "Fork" | "Star"; stat: string }) => {
  const StarIcon = () => (
    <Star className="inline w-5 h-5 text-white" strokeWidth="1.4" />
  );

  const ForkIcon = () => (
    <GitFork className="inline w-5 h-5 text-white" strokeWidth="1.4" />
  );

  return (
    <div className="flex flex-row gap-2 align-center">
      <IconBox>{icon === "Fork" ? <ForkIcon /> : <StarIcon />}</IconBox>
      <p className="my-auto font-semibold text-slate-800">{stat}</p>
    </div>
  );
};

export const RepoCard = (repo: PinnedRepos) => {
  return (
    <div className="flex flex-col gap-8 p-6 shadow-lg w-60 rounded-xl border-slate-300 ">
      <div className="flex flex-row justify-between">
        <Avatar key={repo.repo}>
          <AvatarImage src={logos[repo.repo]} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <p className={`my-auto font-bold text-slate-800 ${firaCode.className}`}>
          {repo.owner}/{repo.repo}
        </p>
      </div>
      <div className="flex flex-row justify-around">
        <IconLine icon="Fork" stat={repo.forks} />
        <IconLine icon="Star" stat={repo.stars} />
      </div>
      <div className="flex flex-row justify-around gap-4">
        <a href={repo.link} target="_blank" rel="noopener noreferrer">
          <IconBox className="relative">
            <Box className="inline w-5 h-5 text-white" strokeWidth="1.4" />
            <span className="absolute text-white rounded-full bg-slate-500 -top-3 -right-3">
              <ExternalLink className="inline h-3 my-auto" />
            </span>
          </IconBox>
        </a>

        <div>
          <a href={repo.website} target="_blank" rel="noopener noreferrer">
            <IconBox className="relative">
              <Globe className="inline w-5 h-5 text-white" strokeWidth="1.4" />
              <span className="absolute text-white rounded-full bg-slate-500 -top-3 -right-3">
                <ExternalLink className="inline h-3 my-auto" />
              </span>
            </IconBox>
          </a>
        </div>
      </div>
    </div>
  );
};
