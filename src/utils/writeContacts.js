import { PATH_DB } from '../constants/contacts.js';
const fs = require("node: fs/promises");


export const writeContacts = async (updatedContacts) => {
    try {
        const data = await fs.writeFile(PATH_DB, updatedContacts, { encoding: 'utf-8' });
        return data;
    } catch (error) {
        console.error(error);
    }
};
