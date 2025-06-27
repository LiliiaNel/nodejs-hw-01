import {createFakeContact} from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
try {
     const prevContacts = await (readContacts());
        const newContact = createFakeContact();
        const allContacts = [...prevContacts, newContact];
        await writeContacts(allContacts);
} catch (error) {
    console.error(error);
}
};

addOneContact();
