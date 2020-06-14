module.exports = (file, path) => {
    if (!path) path = 'page'
    return () => import(`../${path}/${file}.vue`);
}
