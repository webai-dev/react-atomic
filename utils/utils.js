import moment from "moment"

export const isImageOrSVG = (value, checkSVG = false) => {
    let re = new RegExp(`/*\.(?:png|jpg|jpeg${checkSVG ? "|svg" : ""})`)

    return re.test(value)
}

export const articleDataParser = (data) => {
    return data && data.length > 0 ? data.map((datum) => ({
        id: datum?.id,
        title: datum?.title,
        description: datum?.shortDesc,
        tags: datum?.tags,
        blogImage: datum?.imageUrl,
        authorImage: datum?.authorInformation?.avatarUrls["24"],
        authorName: datum?.authorInformation?.name,
        postDate: moment(datum?.date).format("DDD MMM, YYYY"),
    })) : [];
}

export const getArticleLink = (url) => {
    return url?.split("?")[0]
}
