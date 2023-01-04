const excelGenerator = (products, file_name, res) => {
  const efn = require("excel4node");

  products = products.map((product) => {
    let id = product._id.toString();
    delete product._id;
    return {
      id,
      ...product,
    };
  });

  let work_book = new efn.Workbook();
  let work_sheet = work_book.addWorksheet("stock");

  for (let i = 1; i <= products.length; i++) {
    for (let j = 1; j <= Object.values(products[0]).length; j++) {
      let data = Object.values(products[i - 1])[j - 1];
      if (typeof data === "string") {
        work_sheet.cell(i, j).string(data);
      } else {
        work_sheet.cell(i, j).number(data);
      }
    }
  }

  work_book.write(`${file_name}.xlsx`, res);
};

module.exports.ProductsUtils = {
  excelGenerator,
};
