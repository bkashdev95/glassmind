// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Client, Company } = initSchema(schema);

export {
  User,
  Client,
  Company
};