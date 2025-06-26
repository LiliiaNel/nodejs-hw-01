import { PATH_DB } from '../constants/contacts.js';
import { readFile } from "node:fs/promises";


export const readContacts = async () => {
   try { 
    const data = await readFile(PATH_DB, {encoding: "utf-8"});
    // const data = await readFile('src/db/db.json', {encoding: "utf-8"});
     return data ? JSON.parse(data) : [];
} catch (error) {
console.error(error);
}
};
console.log(await readContacts());