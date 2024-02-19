const listLength = document.getElementsByClassName("item");
console.log(`Number of categories: ${listLength.length}`);

const headingListItem = document.querySelectorAll(".item > h2");
headingListItem.forEach(function (headingListItem) {
  const headingNames = headingListItem.textContent;
  const categoriesNames =
    headingListItem.parentElement.querySelectorAll("ul > li");
  console.log(`Category: ${headingNames}`);
  console.log(`Elements: ${categoriesNames.length}`);
});
