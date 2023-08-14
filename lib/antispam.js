const usedCommandRecently = new Set();

const isFiltered = (from) => !!usedCommandRecently.has(from);

const addFilter = (from) => {
  usedCommandRecently.add(from);
  setTimeout(() => usedCommandRecently.delete(from), 10000);
};

export const antiSpam = {
  isFiltered,
  addFilter
};
