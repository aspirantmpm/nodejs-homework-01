const contactsService = require('./contacts');
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case 'get':
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case 'add':
      const newContacts = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContacts);
      break;

    case 'remove':
      const deleteContacts = await contactsService.removeContact(id);
      console.log(deleteContacts);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a,--action <type>')
  .option('-i,--id <type>')
  .option('-n,--name <type>')
  .option('-e,--email <type>')
  .option('-p,--phone <type>');

program.parse();
const option = program.opts();
invokeAction(option);
