const supabase = require("./_supabase");

exports.handler = async (event) => {
  try {
    const { usn } = JSON.parse(event.body);
    const { data, error } = await supabase
      .from("students")
      .select("section")
      .eq("usn", usn)
      .single();

    if (error || !data) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Invalid credentials" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ section: data.section })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
