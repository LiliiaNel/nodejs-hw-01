import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
    try {
   const allContacts =  await getAllContacts();
   return allContacts.length;
    } catch (error) {
        console.error(error);
        return 0;
    }
};

console.log(await countContacts());
