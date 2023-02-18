export type Class<T = any> = new (...args: any[]) => T;

export const mapOne =
  <Base extends Class>(cls: Base) =>
  (item: any): Base | any => {
    return new cls(item);
  };

export const mapMany =
  <Base extends Class>(cls: Base) =>
  (list: any[]): Base[] | any => {
    return list?.map((item) => mapOne(cls)(item) || []);
  };

export const setNullableDate = (date: string | null) => {
  return date ? new Date(date) : null;
};
