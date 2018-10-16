import html_concepts from './html_concepts';
import {easy, story, html, css, python, tangent, js} from './consts'

const projects = [
    {
        title : "Make a website for your shop",
        difficulty : easy,
        description: "stuff",
        languages : [html,css],
        steps : [
            // a step can be something descriptive, an excercise, or any number of things
            {
                type : story,
                text : "Our goal here is to build a website and get it online. That's right! By the end of this little project you will have your very own website"
            },
            {
                type : story,
                text : "We have a few goals for the website. We want to make sure it has your name on it, we want pictures, and colours. We also want your website to blah blah etc"
            },
            {
                type : story,
                text : "The first thing you'll need to understand is a little thing called HTML. It looks a little strange but you'll get used to it quite quickly"
            },
            {
                type : tangent, // these are for going off on tangents. For explaining concepts that aren't in the main flow...
                concepts : [html_concepts.heading_tag]
            }

        ],
    },

    {
        title : "make a guess the number game for your website",
        difficulty : easy,
        description : "stuff",
        steps : [],
        languages : [js],
    },

    {
        title : "make a guess the number game in Python",
        difficulty : easy,
        description : "stuff",
        steps : [],
        languages : [python],
    }
]

export default projects
