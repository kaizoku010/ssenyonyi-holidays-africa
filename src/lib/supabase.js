import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcavzfkqcshguuuwzrpv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXZ6ZmtxY3NoZ3V1dXd6cnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTgwMjMsImV4cCI6MjA1OTY3NDAyM30.ATZqiD8TQPFDN4bE9DSSc4Fi5TWoDgvxRXasg5Axo7o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
