export const formatId = (id: number) => {
  // return id.toString
//   return ("000" + id).slice(-3);
    return String(id).padStart(2, "0");
//   if (id <10)
};
export const formatName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  //   return name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
};
