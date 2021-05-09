export const addLinkToPages = (pages, leadingLink) => {
    const addSlugToEndOfLink = (link, slug) => {
        return link + '/' + slug;
    }
    //create link for parent page based on category (leading link)
    pages.forEach(parentPage => parentPage.link = addSlugToEndOfLink(leadingLink, parentPage.slug));
    //now do it for children of each page based on newly created parent link
    pages.forEach(parentPage => {
        if(!parentPage.children) return;
        const parentLink = parentPage.link;
        parentPage.children.forEach(childPage => childPage.link = addSlugToEndOfLink(parentLink, childPage.slug));
    })
    //pages are now mutated anyway
    return pages;
}