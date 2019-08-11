function createTweetCard(tweet) {
    // function to create the tweets from the database in form to show to user
    return (`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title" id="author">${tweet.author}</h4>
            <p class="card-text" id="content">${tweet.content}</p>
            <a href="#" class="card-link">Like</a>
            <a href="#" class="card-link">Dislike</a>
            <a href="#" class="card-link">Remove</a>
        </div>
    </div><br>
    `)
}

function addTweet(auth, cont, done) {
    // function to add the tweet in the database
    // from this function we send a post request that we added in routes/content.js
    $.post('/content', {
        author: auth,
        content: cont
    }, function (data) {
        done(data)
    })

}

function fetchTweets(done) {
    $.get('/content', function (data) {
        // console.log(data)
        done(data)
    })
}
