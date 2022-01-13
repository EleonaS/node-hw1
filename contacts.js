const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");


const filePath = path.join(__dirname, "db/contacts.json");

const listContacts = async()=> {
    const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  console.table(contacts);
  return contacts;
}

const getContactById = async(id) => {
    const contacts = await listContacts ();
    const result = contacts.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
}

const addContact = async(name, email, phone)=> {
  const data = { id: nanoid(), name, email, phone };
  const contacts = await listContacts();
  contacts.push(data);
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return data;
}
 
const removeContact= async(id)=> {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const deleteContact = contacts[idx];
    contacts.splice(idx, 1);
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return deleteContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};