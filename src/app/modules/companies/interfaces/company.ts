export interface CompanyResponse {
  message: string;
  data: Company[];
  status: number;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  phone: string;
  created_at: Date | null;
  updated_at: Date | null;
}
