const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "url"; // replace url with the actual url
const supabaseKey = "key"; // replace key with the actual key

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
