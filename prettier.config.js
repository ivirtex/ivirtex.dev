module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@internal/(.*)$",
    "^[./].*(?<!\\.(c|le|sc)ss)$",
    "^[.]/[-a-zA-Z0-9_]+[.](module)[.](css|scss|less)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
};
