export const getShortTitle = (title: string) => {
  if (title.includes("Introduction")) return "Introduction";
  if (title.includes("techniques")) return "Technique";
  if (title.includes("sécurité")) return "Sécurité";
  if (title.includes("Économie")) return "Économie";
  if (title.includes("Applications")) return "Applications";
  return title.split(' ')[0];
};