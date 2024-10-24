const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

const gridContainer = document.querySelector('.grid');

function renderArticles(articles) {
	articles.forEach(article => {  // Change articles to singular 'article'

		// Create the book_section div
		const bookSection = document.createElement('div');
		bookSection.classList.add('book_section');

		// Create book_info div
		const bookInfo = document.createElement('div');
		bookInfo.classList.add('book_info');
		
		// Create the ul element with book details
		const bookDetails = `
            <ul>
                <li><h2>${article.date}</h2></li>
                <li><p>${article.ages}</p></li>
                <li><p>${article.genre}</p></li>
                <li><p>${article.stars}</p></li>
            </ul>
        `;
		bookInfo.innerHTML = bookDetails;

		// Create book_article div
		const bookArticle = document.createElement('div');
		bookArticle.classList.add('book_article');

		// Create the content for the book article
		const bookContent = `
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        `;
		bookArticle.innerHTML = bookContent;

		// Append the book_info and book_article to the book_section
		bookSection.appendChild(bookInfo);
		bookSection.appendChild(bookArticle);  // Correct typo here (boookSection)

		// Append the book_section to the grid container
		gridContainer.appendChild(bookSection);
	});
}

// Call the function to render the articles
renderArticles(articles);
