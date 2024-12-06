// Function to handle post creation
function submitPost() {
    let newPost = document.getElementById('new-post').value;
    if (newPost) {
        alert('Post created: ' + newPost);
        document.getElementById('new-post').value = '';
    } else {
        alert('Please write something to post.');
    }
}

// Function to handle comment creation
function submitComment() {
    let comment = document.querySelector('textarea').value;
    if (comment) {
        alert('Comment posted: ' + comment);
        document.querySelector('textarea').value = '';
    } else {
        alert('Please write a comment.');
    }
}

// Function for reactions (like/dislike)
function react(reaction) {
    alert('You reacted with: ' + reaction);
}

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;

  // Function to toggle between "Show More" and "Show Less"
function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggleBtn");

    if (dots.style.display === "none") {
        // If text is already expanded, hide extra text and reset the button
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = "Show More";
    } else {
        // If text is collapsed, show extra text and change button
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = "Show Less";
    }
}

// Handles the submission of new blog post
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let postTitle = document.getElementById('postTitle').value;
    let postContent = document.getElementById('postContent').value;

    if (postTitle && postContent) {
        // Create a new post container
        let postContainer = document.createElement('div');
        postContainer.classList.add('post');

        // Add the title and content to the post
        postContainer.innerHTML = `
            <h3>${postTitle}</h3>
            <p>${postContent}</p>
            <div class="comments-section">
                <textarea class="comment-input" placeholder="Add a comment..."></textarea>
                <button class="comment-submit">Submit Comment</button>
            </div>
            <div class="comments-container"></div>
        `;

        // Append the new post to the posts section
        document.getElementById('posts').appendChild(postContainer);

        // Reset the form fields
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
    }
});

// Handles comment submission
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('comment-submit')) {
        let commentText = e.target.previousElementSibling.value;
        if (commentText) {
            // Create a new comment
            let commentContainer = document.createElement('div');
            commentContainer.classList.add('comment');
            commentContainer.innerHTML = `
                <p class="comment-content">${commentText}</p>
                <div class="comment-footer">
                    <button class="emote-button">😊</button>
                    <button class="emote-button">❤️</button>
                    <button class="emote-button">😂</button>
                </div>
            `;

            // Add the new comment to the comments section of the post
            let commentsContainer = e.target.parentElement.nextElementSibling;
            commentsContainer.appendChild(commentContainer);

            // Clear the comment input field
            e.target.previousElementSibling.value = '';
        }
    }

    // Handles the emote buttons
    if (e.target.classList.contains('emote-button')) {
        let emote = e.target.textContent;
        alert(`You reacted with: ${emote}`);
    }
});

