document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username').innerText;
    const followersCount = document.getElementById('followers-count');
    const followBtn = document.getElementById('follow-btn');
    const postBtn = document.getElementById('post-btn');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');
    
    let followers = 0;

    followBtn.addEventListener('click', () => {
        followers++;
        followersCount.innerText = followers;
        followBtn.innerText = 'Following';
        followBtn.disabled = true;
    });

    postBtn.addEventListener('click', () => {
        const content = postContent.value;
        if (content) {
            addPost(username, content);
            postContent.value = '';
        }
    });

    function addPost(username, content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <p><strong>${username}</strong>: ${content}</p>
            <div class="likes">
                <button class="like-btn">Like</button> <span class="likes-count">0</span>
            </div>
            <div class="comments">
                <textarea class="comment-content" placeholder="Add a comment"></textarea>
                <button class="comment-btn">Comment</button>
                <div class="comment-list"></div>
            </div>
        `;

        const likeBtn = post.querySelector('.like-btn');
        const likesCount = post.querySelector('.likes-count');
        let likes = 0;

        likeBtn.addEventListener('click', () => {
            likes++;
            likesCount.innerText = likes;
        });

        const commentBtn = post.querySelector('.comment-btn');
        const commentContent = post.querySelector('.comment-content');
        const commentList = post.querySelector('.comment-list');

        commentBtn.addEventListener('click', () => {
            const comment = commentContent.value;
            if (comment) {
                addComment(username, comment, commentList);
                commentContent.value = '';
            }
        });

        postList.prepend(post);
    }

    function addComment(username, comment, commentList) {
        const commentElem = document.createElement('div');
        commentElem.className = 'comment';
        commentElem.innerText = `${username}: ${comment}`;
        commentList.appendChild(commentElem);
    }
});
