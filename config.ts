export const languages = ["en", "vi"] as const;

export type Language = (typeof languages)[number];

export const links = {
	github: "https://github.com/sharrlotte",
	linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-nh%C6%A1n-h%E1%BA%ADu-737402343/",
	email: "nguyennhonhau25052003@gmail.com",
	cv: "https://docs.google.com/document/d/1CZCC3ytnnShHFpb1gCsIlANcej5iLtZMXyqj4FBfiwQ/edit?usp=sharing",
};

export const technologies = {
	ReactJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	NextJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	TailwindCss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	NestJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
	SpringBoot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
	Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
	Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
	Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
	Grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
	Prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
	Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
	AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
	Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	Github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
	Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
	Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
} as const;

export type Tech = keyof typeof technologies;
