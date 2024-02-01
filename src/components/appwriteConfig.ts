import { Client , Account, Databases, Storage} from "appwrite";
export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '658d3f3595fc0af5d694'
const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client)

export default client;


