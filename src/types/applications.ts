export interface Application {
  title: string;
  description: string;
  image: string;
  url?: string;
  technologies?: string[];
  category?: string;
  year?: string;
}

export interface ApplicationsData {
  mobile: Application[];
  web: Application[];
}
