const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

for (let i = 0; i < totalCategories.length; i += 1) {
	console.log(totalCategories[i].children[0].innerText);
    console.log(totalCategories[i].children[1].children.length);
}
