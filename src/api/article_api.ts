export class ArticleApi {

    async findAllArticle(category: string, technology: string) {
        let query = "";
        if (category !== undefined && technology === undefined) {
            query = `?category=${category}`;
        } else if (category !== undefined && technology !== undefined) {
            query = `?category=${category}&technology=${technology}`;
        }
        let response = await fetch(`https://rust.xujiyou.work/article/list/1${query}`, {
            method: "GET",
        });
        return await response.json();
    }

    async viewArticleDetail(category: string, technology: string, fileName: string) {
        // https://boot.xujiyou.work/api/article/view/${category}/${technology}/${fileName}
        let response = await fetch(`https://boot.xujiyou.work/api/article/view/${category}/${technology}/${fileName}`, {
            method: "GET",
        });
        return await response.text();
    }
}
