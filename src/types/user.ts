export interface Internship {
  id: string;
  company_name: string;
  position: string;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  is_current: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  address: string | null;
  contact_number: string | null;
  city: string | null;
  state: string | null;
  avatar_url?: string;
  internships?: Internship[];
  created_at: string;
  updated_at: string;
} 