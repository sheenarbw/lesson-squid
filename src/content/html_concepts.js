const html_concepts = {}

html_concepts.tags_intro = {
    // by the end of this the user should be able to recognise tags. They might not know what specific tags mean though
}

html_concepts.heading_tag = {
    // by the end of this the user should be able to use <h1> <h2> etc
    prerequisites : [html_concepts.tags_intro]
}

html_concepts.image_tag = {
    prerequisites : [html_concepts.tags_intro]

}

export default html_concepts
