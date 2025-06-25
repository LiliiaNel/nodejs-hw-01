import { PATH_DB } from '../constants/contacts.js';
const fs = require("node: fs/promises");


export const readContacts = async () => {
   try { 
    const res = await fs.readFile(PATH_DB, {encoding: "utf-8"});
    return res;
} catch (error) {
console.error(error);
}
};
