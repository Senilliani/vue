export interface Examples {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
  _meta: Meta;
}

export interface Meta {
  powered_by: string;
  docs_url: string;
  upgrade_url: string;
  example_url: string;
  variant: string;
  message: string;
  cta: Cta;
  context: string;
}

export interface Cta {
  label: string;
  url: string;
}

export interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
