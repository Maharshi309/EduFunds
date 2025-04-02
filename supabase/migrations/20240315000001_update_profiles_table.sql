-- Rename name column to first_name and add new columns
ALTER TABLE profiles 
  RENAME COLUMN name TO first_name;

-- Add new columns
ALTER TABLE profiles 
  ADD COLUMN last_name TEXT,
  ADD COLUMN address TEXT,
  ADD COLUMN contact_number TEXT,
  ADD COLUMN city TEXT,
  ADD COLUMN state TEXT; 