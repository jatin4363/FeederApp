$(function () {
    // console.log("we r in index.js in public")
    let tweetlist = $('#tweet-list')
    fetchTweets(function (tweets) {
        tweetlist.empty()
        console.log(tweets)
        for (tweet of tweets) {
            // console.log(tweet)
            tweetlist.prepend(createTweetCard(tweet))
        }
    })
    // console.log("After fetch tweets ")

    let auth = $('#author')
    let cont = $('#content')

    $('#add-btn').click(() => {
        addTweet(
            auth.val(),
            cont.val(),
            function () {
                // window.alert(TweeteAdded + 'has been added to the db')
                location.reload()
                auth.val("")
                cont.val("")
            }
        )
    }
    )

    // $(document).on('click', '#add-btn', function () {
    //     addTweet(
    //         auth.val(),
    //         cont.val(),
    //         function () {
    // location.reload()
    // auth.val("")
    // cont.val("")
    //         }
    //     )
    // });


    // $('#remove-btn').click(() => 
    //     console.log("clicked")
    // ) does not work with dynamically added elements 


    $(document).on('click', '#remove-btn', (event) => {
        // console.log("btn clicked of id :" + $(event.target).parent().parent().attr('id'))
        deleteTweet($(event.target).parent().parent().attr('id'), () => {
            location.reload()
        })
    })
})