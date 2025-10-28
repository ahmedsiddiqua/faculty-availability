const supabase = require("./_supabase");

exports.handler = async (event) => {
  try {
    const { name } = JSON.parse(event.body);

    const { data, error } = await supabase
      .from("status")
      .select("status")
      .eq("name", name)
      .single();

    if (error || !data) throw error;

    const newStatus = data.status === "Available" ? "Unavailable" : "Available";

    const { error: updateError } = await supabase
      .from("status")
      .update({ status: newStatus })
      .eq("name", name);

    if (updateError) throw updateError;

    return {
      statusCode: 200,
      body: JSON.stringify({ newStatus })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
