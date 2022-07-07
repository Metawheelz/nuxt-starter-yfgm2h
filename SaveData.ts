const SaveData = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });

  const Monster = Moralis.Object.extend("Monster");
  const monster = new Monster();

  monster.set("strength", 1024);
  monster.set("ownerName", "Aegon");
  monster.set("canFly", true);

  await monster.save();
};
SaveData();
ts-node SaveData.ts
