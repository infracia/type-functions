export default async function wrapper<T, U = Error>(
  promise: Promise<T>,
  errorExt?: Record<string, unknown>
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }
      return [err, undefined];
    });
}
