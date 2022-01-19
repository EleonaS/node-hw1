const fs = require("fs/promises");
const filePath = require("../../utils/filePath")

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  console.table(contacts);
  return contacts;
};

module.exports = listContacts;