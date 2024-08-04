// Function to find and click the article thumbnail
function clickArticleThumbnail() {
  // Selector to find the specific thumbnail image's parent link element
  const articleThumbnailLink = document.querySelector('#row0 > div.THUMBS-BLOCK > div > a');

  if (articleThumbnailLink) {
    articleThumbnailLink.click();
    sessionStorage.setItem('archive_link_clicked', 'true'); // Set the flag in sessionStorage after clicking the link
  } else {
    console.log('Article thumbnail link not found');
  }
}

// Check if the link has been clicked in this session
const linkClicked = sessionStorage.getItem('archive_link_clicked');

if (!linkClicked) {
  // Run the function after a short delay to ensure the page has loaded
  setTimeout(clickArticleThumbnail, 250); // Adjust the delay as needed
}
