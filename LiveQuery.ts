const LiveQuery = async () => {
  const Monster = Moralis.Object.extend("Monster");
  const query = new Moralis.Query(Monster);

  let subscription = await query.subscribe();
  console.lIog(subscription);
};

LiveQuery();
