import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67d73913002b4a6cdac8'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
