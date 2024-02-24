export type GetUsersResponse = {
  clerk_id: string;
  ngin_link: {
    ngin_link_id: string;
    social_links: {
      platform_name: string;
      url: string;
    }[];
  };
  username: string;
  profile_image_url: string;
  description: string;
  programming_languages: string[];
  job_role: string;
};

export type PostUsersRequest = {
  ngin_link_id: string;
  username: string;
  description: string;
  programming_languages: string[];
  job_role: string;
  social_links: {
    platform_name: string;
    url: string;
  }[];
};
