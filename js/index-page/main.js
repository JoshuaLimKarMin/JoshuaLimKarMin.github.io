// Dialog elements
const personalBlogDialog = document.querySelector('#personalBlogDialog')
const aboutWebsiteDialog = document.querySelector('#aboutWebsiteDialog')

// Button elements
const personalBlogButton = document.querySelector('#personalBlogButton')
const aboutWebsiteButton = document.querySelector('#aboutWebsiteButton')

// Functions

// Personal blog functions
personalBlogButton.addEventListener('click', () => {
   personalBlogDialog.showModal()
})

// About website function
aboutWebsiteButton.addEventListener('click', () => {
   aboutWebsiteDialog.showModal()
})

// Dev log system


// Initialization
// personalBlogDialog.showModal()
// aboutWebsiteDialog.showModal()