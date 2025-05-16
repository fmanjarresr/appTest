/*
  # Add user roles and policies

  1. Changes
    - Add role column to auth.users
    - Create policies for role-based access
*/

-- Add role column to auth.users
ALTER TABLE auth.users ADD COLUMN IF NOT EXISTS role text DEFAULT 'user';

-- Create policy to allow users to read their own data
CREATE POLICY "Users can read own data"
ON auth.users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Create policy to allow admins to read all data
CREATE POLICY "Admins can read all data"
ON auth.users
FOR ALL
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');