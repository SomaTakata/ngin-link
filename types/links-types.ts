export type PatchLinksRequest = {
  social_links: {
    platform_name: string;
    url: string;
  }[];
};

export type PatchLinksResponse = PatchLinksRequest;
