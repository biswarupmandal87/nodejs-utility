# Node Js Utililty
## Description
This is a utility for Node Js that provides some useful functions.
## Installation
```bash
npm install nodejs-utility
```
## Usage 1
```javascript
const {getPagination} = require('nodejs-utility');
const paginationObj = getPagination(totalRecords, currentPage, pageSize);
```
#### This function returns the pagination object.
#### Parameters
- `totalRecords` : The total number of records.
- `currentPage` : The current page number.
- `pageSize` : The number of records per page.
#### Returns
- The pagination object.
#### Pagination Object
- `total` : The total number of records.
- `previousPage` : The previous page number.
- `currentPage` : The current page number.
- `nextPage` : The next page number.
- `totalPages` : The total number of pages.
- `hasPreviousPage` : A boolean value indicating whether there is a previous page.
- `hasNextPage` : A boolean value indicating whether there is a next page.
- `pages` : An array of page numbers.
#### Example
```javascript
console.log(paginationObj); 
// {total: 100, previousPage:0, currentPage: 1, nextPage:2, totalPages: 10, hasPreviousPage:false, hasNextPage:true, pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
```

## Usage 2
```javascript
const {getImageFileObject} = require('nodejs-utility');
const imageFileObject = getImageFileObject(imageFile,path);
```
#### This function returns the image file object.
#### Parameters
- `imageFile` : The image file. 
- `path` : The path of the image file.
#### Returns
- The image file object.
#### Image File Object
- `_id` : An unique id.
- `name` : The name of the image file.
- `type` : The type of the image file.
- `size` : The size of the image file.
- `url` : The URL of the image file.
- `width` : The width of the image file.
- `height` : The height of the image file.
#### Example
```javascript
console.log(imageFileObject);
// {_id: 1fRCklpW63B1Y7WUB, name: 'image.jpg',file_type: "IMAGE", type: 'image/jpeg', size: 1000, url: 'http://localhost:3000/images/image.jpg', width: 100, height: 100}
``` 


## Usage 3
```javascript
const {getFileObject} = require('nodejs-utility');
const fileObject = getFileObject(file,path);
```
#### This function returns the file object.
#### Parameters
- `file` : The file.
- `path` : The path of the file.
#### Returns
- The file object.
#### File Object
- `_id` : An unique id.
- `name` : The name of the file.
- `type` : The type of the file.
- `size` : The size of the file.
- `url` : The URL of the file.
#### Example
```javascript
console.log(fileObject);
// {_id: 1fRCklpW63B1Y7WUB, name: 'file.txt',file_type: "FILE", type: 'text/plain', size: 1000, url: 'http://localhost:3000/files/file.txt'}
```