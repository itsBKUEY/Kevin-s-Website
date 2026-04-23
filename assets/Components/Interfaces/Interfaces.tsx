export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
};