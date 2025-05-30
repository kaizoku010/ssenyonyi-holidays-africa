-- Create table for package inquiries
CREATE TABLE IF NOT EXISTS package_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  package_name TEXT NOT NULL,
  package_id INTEGER NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  message TEXT,
  preferred_date DATE,
  number_of_people INTEGER DEFAULT 2,
  package_price TEXT,
  package_duration TEXT,
  package_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_package_inquiries_created_at ON package_inquiries(created_at DESC);

-- Create an index on customer_email for better query performance
CREATE INDEX IF NOT EXISTS idx_package_inquiries_email ON package_inquiries(customer_email);

-- Enable Row Level Security (RLS)
ALTER TABLE package_inquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for form submissions)
CREATE POLICY "Allow public insert" ON package_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read all records
CREATE POLICY "Allow authenticated read" ON package_inquiries
  FOR SELECT TO authenticated
  USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_package_inquiries_updated_at
  BEFORE UPDATE ON package_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
