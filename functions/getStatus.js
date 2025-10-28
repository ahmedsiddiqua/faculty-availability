const supabase = require("./_supabase");

exports.handler = async (event) => {
  try {
    const section = event.queryStringParameters.section;

    const { data, error } = await supabase
      .from("faculty_sections")
      .select("teacher_name")
      .eq("section", section);

    if (error || !data) throw error;

    const teachers = data.map(t => t.teacher_name);

    const { data: statuses, error: statusError } = await supabase
      .from("status")
      .select("name, status")
      .in("name", teachers);

    if (statusError) throw statusError;

    return {
      statusCode: 200,
      body: JSON.stringify(statuses)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
