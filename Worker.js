export default {
  async fetch(request) {
    const data = await request.json();
    await fetch("https://api.telegram.org/botBOT_TOKEN/sendMessage", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        chat_id: "CHAT_ID",
        text: data.text
      })
    });
    return new Response("OK");
  }
};
