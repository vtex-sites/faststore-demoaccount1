const getFirstParam = (input: string) => {
    if (!input) return '';
    const words = input.trim().split(' ');
    return words[0].toLowerCase();
}

export default getFirstParam