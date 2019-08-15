function createTweetCard(tweet) {
    // function to create the tweets from the database in form to show to user
    return (`
    <div class="card" id ="${tweet.id}">
        <div class="card-body">
            <h4 class="card-title" id="author">${tweet.author}</h4>
            <p class="card-text" id="content">${tweet.content}</p>
            <a href="#" class="card-link">Like</a>
            <a href="#" class="card-link">Dislike</a>
            <a href="#" class="card-link" id="remove-btn">Remove</a>
        </div>
    </div>
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

function deleteTweet(id_val, done) {
    // $.delete('/content/:_id' , function(data){
    //     // done(data)
    // })
    console.log(id_val)
    $.ajax({
        url: '/content/' + id_val,
        type: 'DELETE',
        data: { _method: 'delete' },
        success : done()
        
    })

    // $.post('/content/' + id_val, { _method: 'delete' })
}
