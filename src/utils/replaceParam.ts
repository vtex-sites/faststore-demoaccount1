const replaceParam = (text: string, param: string | undefined) => {
    return param ? text.replace("{PARAM}", param.toUpperCase()) : text;
};

export default replaceParam