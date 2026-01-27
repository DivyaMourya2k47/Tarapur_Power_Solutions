/*
  # Create Inquiries Table

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text) - Inquiry sender's name
      - `email` (text) - Inquiry sender's email
      - `phone` (text) - Inquiry sender's phone number
      - `company_name` (text) - Sender's company
      - `inquiry_type` (text) - Product or Company inquiry
      - `product_interest` (text) - Selected product if applicable
      - `message` (text) - Inquiry message
      - `created_at` (timestamp) - Submission time
      - `status` (text) - Inquiry status (new, viewed, responded)
  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for anyone to create inquiries
    - Add policy for authenticated users to view their own inquiries
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text NOT NULL,
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('product', 'company')),
  product_interest text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'viewed', 'responded'))
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create inquiries"
  ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');
