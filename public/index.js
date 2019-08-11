$(function () {
    console.log("we r in index.js in public")
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

    // $('#add-btn').click(
    //     console.log("eyeyeyey")
    //     // addTweet(
    //     //     auth.val(),
    //     //     cont.val(),
    //     //     function (TweeteAdded) {
    //     //         window.alert(TweeteAdded + 'has been added to the db')
    //     //     }
    //     // )
    //     // ,console.log("34562534eyeyeyey")
    // )

    $(document).on('click', '#add-btn', function () {
        addTweet(
            auth.val(),
            cont.val(),
            function () {
                location.reload()
                auth.val("")
                cont.val("")
            }
        )
    });

    // let tweetlist = $('#tweet-list')

    // fetchTweets(function(tweets){
    //     tweetlist.empty()
    //     for(tweet of tweets){
    //         tweetlist.prepend(createTweetCard(tweet))
    //     }
    // })


})