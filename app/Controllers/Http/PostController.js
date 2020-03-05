'use strict'

class PostController {

    static get inject() {
        return [
            'App/Models/Post'
        ]
    }

    constructor(Post) {
        this.Post = Post
    }

    * index(req, res) {
		console.log('Entrou no index')
		const posts = yield this.Post.all()

		res.json({
			posts
		})
	}

    * create(req, res) {
        console.log('entrou');
        const data = req.only('title', 'text');
        console.log(data);
        yield this.Post.create(data);

        res.json(
            {data}
        )

        
    }
}

module.exports = PostController
