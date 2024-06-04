const buildSceneUrl = (path: string, sceneUrl: string) => {
    const url = new URL(path || '', window.location.origin);
    url.searchParams.set('scene', sceneUrl);
    return url.toString();
}

export default buildSceneUrl