$(function () {
    // console.log("we r in index.js in public")
    let tweetlist = $('#tweet-list')
    fetchTweets(function (tweets) {
        tweetlist.empty()
        console.log("TILL HERE")
        console.log(tweets)
        for (tweet of tweets) {
            // console.log(tweet)
            tweetlist.prepend(createTweetCard(tweet))
        }
    })
    // console.log("After fetch tweets ")

    // let auth = $('#author')
    let cont = $('#content')

    $('#add-btn').click(() => {
        addTweet(
            // auth.val(),
            cont.val(),
            function () {
                // window.alert(TweeteAdded + 'has been added to the db')
                location.reload()
                // auth.val("")
                cont.val("")
            }
        )
    }
    )
    $('#logout-btn').click(() => {
        $.get('/logout', function (data) {
            // console.log(data)
            alert("You were successfully loggedout")
        })
    })

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
        var result = confirm("Are you sure you want to delete this Tweet?");
        if (result) {
            deleteTweet($(event.target).parent().parent().attr('id'), (response) => {
                console.log(response)
                alert(response)
                location.reload()
            })
        }

    })
})