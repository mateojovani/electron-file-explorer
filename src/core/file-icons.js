const iconMapper = {
    'desktop': 'desktop',
    'documents': 'folder',
    'downloads': 'download',
    'music': 'music',
    'pictures': 'picture',
    'videos': 'video'
}

const extMapper = {
    '3gp': 'flaticon-3gp-file-black-interface-symbol',
    'aac': 'file-black-interface-symbol',
    'ai': 'flaticon-ai-design-document-black-interface-symbol',
    'aiff': 'flaticon-aiff-file-black-rounded-rectangular-interface-symbol',
    'app': 'flaticon-app-document-black-interface-symbol',
    'asp': 'flaticon-asp-file-type-solid-black-interface-symbol',
    'avi': 'flaticon-avi-file-black-rounded-rectangular-interface-symbol',
    'bmp': 'flaticon-bmp-image-file-solid-interface-symbol',
    'c': 'flaticon-c-file-black-interface-symbol',
    'cpp': 'flaticon-cpp-document-black-interface-symbol',
    'css': 'flaticon-css-file-black-interface-symbol',
    'dat': 'flaticon-dat-file-solid-black-interface-symbol',
    'dmg': 'flaticon-dmg-document-black-interface-symbol',
    'doc': 'flaticon-doc-document-file-black-interface-symbol',
    'docx': 'flaticon-docx-file-black-interface-symbol',
    'dot': 'flaticon-dot-document-black-interface-symbol',
    'dotx': 'flaticon-dotx-document-black-interface-symbol',
    'dwg': 'flaticon-dwg-file-format-solid-black-interface-symbol',
    'dxf': 'flaticon-dxf-file-black-interface-symbol',
    'eps': 'flaticon-eps-file-black-interface-symbol',
    'exe': 'flaticon-exe-document-black-interface-symbol',
    'flv': 'flaticon-flv-file-type-black-interface-symbol',
    'gif': 'flaticon-gif-image-file-black-interface-symbol',
    'h': 'flaticon-h-file-black-interface-symbol',
    'html': 'flaticon-html-document-black-interface-symbol ',
    'ics': 'flaticon-ics-file-black-solid-interface-symbol ',
    'iso': 'flaticon-iso-file-type-black-solid-interface-symbol ',
    'java': 'flaticon-java-black-file-interface-symbol ',
    'jpg': 'flaticon-jpg-compressed-image-file-black-interface-symbol ',
    'key': 'flaticon-key-black-file-type-interface-symbol ',
    'm4v': 'flaticon-m4v-file-black-interface-symbol ',
    'mid': 'flaticon-mid-file-type-black-interface-symbol ',
    'mov':'flaticon-mov-solid-black-interface-symbol-of-file-type ',
    'mp3': 'flaticon-mp3-file-type-black-interface-symbol',
    'mp4': 'flaticon-mp4-file ',
    'mpg': 'flaticon-mpg-file-solid-black-interface-symbol ',
    'num': 'flaticon-num-file-type-black-solid-interface-symbol ',
    'numbers': 'flaticon-numbers-file-black-rectangular-interface-symbol ',
    'odp': 'flaticon-odp-file-black-interface-symbol',
    'ods': 'flaticon-ods-file-black-interface-symbol',
    'odt': 'flaticon-odt-file-black-interface-symbol ',
    'ots': 'flaticon-ots-file-type-symbol ',
    'ott': 'flaticon-ott-file-black-interface-symbol' ,
    'pdf': 'flaticon-pdf-file-type-symbol' ,
    'pgs': 'flaticon-pgs-black-interface-symbol',
    'php': 'flaticon-php-programmation-file-black-interface-symbol' ,
    'png': 'flaticon-png-image-file-type-black-interface-symbol',
    'pps': 'flaticon-pps-file-black-interface-symbol ',
    'ppt': 'flaticon-ppt-file-solid-interface-symbol ',
    'psd': 'flaticon-psd-file-black-interface-symbol ',
    'py': 'flaticon-py-file-solid-interface-symbol ',
    'qt': 'flaticon-qt-file-black-interface-symbol ',
    'rar': 'flaticon-rar-file-type ',
    'rb': 'flaticon-rb-document-black-interface-symbol ',
    'rtf': 'flaticon-rtf-document-black-interface-symbol ',
    'sql': 'flaticon-sql-document ',
    'text': 'flaticon-text-document-black-interface-symbol ',
    'tga': 'flaticon-tga-file-rounded-rectangular-black-interface-symbol ',
    'tgs': 'flaticon-tgs-file-black-interface-symbol ',
    'tgz': 'flaticon-tgz-document-black-interface-symbol ',
    'tiff': 'flaticon-tiff-high-quality-image-file-type-black-interface-symbol' ,
    'wav': 'flaticon-wav-file-type-black-interface-symbol' ,
    'xlsx': 'flaticon-xlsx-file-format-black-interface-symbol',
    'xml': 'flaticon-xml-document-black-interface-symbol',
    'yml': 'flaticon-yml-document-black-interface-symbol',
    'zip': 'flaticon-zip-file-black-interface-symbol'
}

let find = (key) => {
    key = key && key.toLowerCase() || ''
    for (let icon in iconMapper) {
        if(key.includes(icon))
            return iconMapper[key]
    }

    return ''
}

let getFileIcon = (path) => {
    let ext = path && path.split(".").pop().toLowerCase()
    if (ext) {
        try {
            return extMapper[ext]
        }catch(err){
            return ''
        }
    }

    return ''
}

export default {
    find: find,
    getFileIcon: getFileIcon
}