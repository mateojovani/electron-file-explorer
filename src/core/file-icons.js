const iconMapper = {
    'desktop': 'desktop',
    'documents': 'folder',
    'downloads': 'download',
    'music': 'music',
    'pictures': 'picture',
    'videos': 'video'
}

let find = (key) => {
    key = key.toLowerCase()
    for (let icon in iconMapper) {
        if(key.includes(icon))
            return iconMapper[key]
    }

    return ''
}

export default {
    find: find
}