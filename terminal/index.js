$('body').terminal(
    {
        about: function() {
            this.echo('Some fancy text about myself');
        }
    },

    // {
    //     help: function() {
    //         this.echo(
    //             'about - Get to know more about me in a nutshell'
    //             + ''
    //             + 'email - Write me a love letter'
    //             + 'github - Check out my repos'
    //             + 'help - Looks like you already figured that out!'
    //             + 'linkedin - Connect with me on LinkedIn'
    //             + 'resume - Download my resume'
    //             + 'speaking - Read about my previous/upcoming public speaking engagement or invite me to your event'
    //             + ''
    //             )
    //     }
    // }

    {
        greetings: greetings.innerHTML
    }
);