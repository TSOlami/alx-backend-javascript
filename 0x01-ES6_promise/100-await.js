import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  // call the functions and return an object
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (_) {
    return { photo: null, user: null };
  }
}
