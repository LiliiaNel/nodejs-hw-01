import {createFakeContact} from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        const prevContacts = await (readContacts());
        const newContacts = Array(number).fill(null).map(()=>createFakeContact());
        const allContacts = [...prevContacts, ...newContacts];
        await writeContacts(allContacts);
    } catch (error){
        console.error(error);
    }
};

console.log (generateContacts(5));
