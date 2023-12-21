export const getMDXTableOfContents = (markdown: string) => {
    const regXHeader = /#{2,6}.+/g;
    const headingArray = markdown.match(regXHeader)
        ? markdown.match(regXHeader)
        : [];
    return headingArray?.map((heading, index) => {
        return {
            level: heading.split("#").length - 1 - 2, // we starts from the 2nd heading that's why we subtract 2 and 1 is extra heading text
            id: `heading-${index + 1}`, // we starts from the 2nd heading that's why we add 1 and 1 is extra heading text
            heading: heading.replace(/#{2,6}/, "").replace(/\*\*/g, "").trim(),
        };
    });
}
