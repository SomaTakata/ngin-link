export type GetUsersResponse = {
  ClerkID: string;
  NginLink: {
    NginLinkID: string;
    SocialLinks: {
      PlatformName: string;
      URL: string;
    }[];
  };
  Username: string;
  ProfileImageURL: string;
  Description: string;
  ProgrammingLanguages: string[];
  JobRole: string;
};
