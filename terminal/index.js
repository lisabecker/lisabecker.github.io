$('body').terminal(
    {
        about: function() {
            this.echo('Some fancy text about myself');
        }
    },

    {
        github: function() {
            this.echo('Opening GitHub...');
            window.open('https://github.com/lisabecker', '_blank');
        }

    },

    {
        linkedin: function() {
            this.echo('Opening LinkedIn...');
            window.open('https://www.linkedin.com/in/becker-lisa/', '_blank');
        }

    },

    {
        resume: function() {
            this.echo('Downloading resume...');
        }
    },

    // {
    //     help: function() {
    //         this.echo(
    //             'about - Get to know more about me in a nutshell'
    //             + ''
    //             + 'email - Write me a love letter' :(
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
