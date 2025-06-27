import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const removeLastContact = async () => {
    try {
       const totalContacts = await readContacts();
       if (totalContacts.length === 0) {
        console.log ("No contacts");
        return;
       } else {
        totalContacts.pop();
        await writeContacts(totalContacts);
       }
    } catch (error) {
         console.error(error);
    }
};

removeLastContact();
