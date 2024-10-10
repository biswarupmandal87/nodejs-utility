
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 16 });
const sizeOf = require("image-size");
const getPagination = (totalRecords, currentPage,pageSize = 10) => {
  const totalPages = Math.ceil(totalRecords / pageSize); // Calculate total pages
  const page = currentPage || 1; // Fallback to page 1 if not defined
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;
  const hasPrevPage = prevPage !== null;
  const hasNextPage = nextPage !== null;
  const itemsArray = generatePaginationNumbers(totalPages, page);
  return {
    total: totalRecords,
    previousPage: prevPage || 0,
    currentPage: page || 0,
    nextPage: nextPage || 0,
    pages: itemsArray,
    totalPages: totalPages,
    hasPreviousPage: hasPrevPage,
    hasNextPage: hasNextPage,
  };
};
const generatePaginationNumbers = (totalPages, currentPage) => {
  const paginationNumbers = [];
  const maxVisiblePages = 10; // Maximum number of pagination numbers to show
  // If there are fewer pages than the maximum visible pages, show all pages
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(i);
    }
  } else {
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(currentPage - halfMaxVisiblePages, 1);
    let endPage = Math.min(currentPage + halfMaxVisiblePages, totalPages);
    // Ensure we have enough pages displayed when nearing the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
      } else {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(i);
    }
  }
  return paginationNumbers;
};
const getImageFileObject = (file, path) => {
  try {
    const dimensions = sizeOf(file.data);
    const { size, name, mimetype } = file;
    return {
      _id: uid.rnd(),
      name: name,
      size: size,
      type: mimetype,
      file_type: "IMAGE",
      url: path,
      width: dimensions.width,
      height: dimensions.height,
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
const getFileObject = (file, path) => {
  const { size, name, mimetype } = file;
  return {
    _id: uid.rnd(),
    size: size,
    name: name,
    type: mimetype,
    file_type: "FILE",
    url: path,
  };
};

module.exports = {
  getImageFileObject,
  getFileObject,
  getPagination,
};
