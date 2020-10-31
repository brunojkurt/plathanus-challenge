import bcrypt from 'bcryptjs';
import { promisify } from 'util';
const AsyncHash = promisify(bcrypt.hash);
const AsyncCompare = promisify(bcrypt.compare);

export default async function hash(input: string) {
  const hashed = await AsyncHash(input, 12);
  return hashed;
}

export async function compare(input: string, hashedInput: string) {
  const validCompare = await AsyncCompare(input, hashedInput);
  return validCompare;
}