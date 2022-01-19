const { Command } = require('commander');
const contactsOperations = require("./controllers/contactsOperations/index");

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
      
    case "list":
      const contacts = await contactsOperations.listContacts();
      break;
      
    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;
      
    case "add":
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;
    
    case "update":
      const updateContact = await contactsOperations.updateById(
        id.toString(),
        name,
        email,
        phone);
      if (!updateContact) {
        throw new Error(`Contact with id = ${id} not found!`)
      };
      console.log('\nUpdated contact:');
      console.table(updateContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;
      
    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
};

const options = program.opts();
invokeAction(options);