module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("24/7 Staizer Music",{ type: 'Listening'});
};
