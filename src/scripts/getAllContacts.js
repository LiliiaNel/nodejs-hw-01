import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
       const allContacts = await (readContacts());
       return allContacts;
    } catch (error) {
        console.error(error);
        return [];
    }
};

console.log(await getAllContacts());
