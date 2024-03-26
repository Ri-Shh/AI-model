const router = require('express').Router();
const BlogModel = require('../models/blogs.js');
const { requireLoggedIn } = require('../middleware/auth_middleware');


// GET all blogs created by a particular user
router.get('/profile/:id', async (req, res) => {
    await BlogModel.find({ userid: req.params.id })
    .then((docs) => {
        // console.log(`The following docs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        // console.log(`Blogs could not be fetched. Error: ${err}`);
        res.send({
            error: "Blogs could not be fetched."
        });
    });
})

// GET all blogs
router.get('/', async (req, res) => {
    await BlogModel.find()
    .then((docs) => {
        // console.log(`The following blogs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        // console.log(`Blogs could not be fetched. Error: ${err}`);
        res.send({
            error: "Blogs could not be fetched."
        });
    });
});


// GET a particular blog
router.get('/:id', async (req, res) => {
    await BlogModel.findById(req.params.id)
    .then((doc) => {
        // console.log(`The following blog is retrieved: ${doc}`);
        res.send(doc);
    })
    .catch(err => {
        // console.log(`Blog could not be fetched. Error: ${err}`);
        res.send({
            error: "Blog could not be fetched."
        });
    });

});


// POST a blog
router.post('/', requireLoggedIn, async (req, res) => {
    // validate first

    const { Userid, Content, Title, Cat } = req.body;

    // encode image
    // const encodedImage = img.toString('base64');

    // store Document details
    const blog = new BlogModel({
        userid: Userid,
        content: Content,
        title: Title,
        category: Cat
    });
    await blog.save()
    .then((doc) => {
        // console.log(`The blog has been saved: ${doc}`);
        res.send({
            success: "Blog saved successfully.",
            id: doc._id
        });
    })
    .catch(err => {
        // console.log(`Blog could not be saved. Error: ${err}`);
        res.send({
            error: "Blog could not be saved."
        });
    });
});


router.put('/:id', requireLoggedIn, async (req, res) => {
    // TODO: Must also check if the person who is authenticated is editing his own blog only.
    const { likes } = req.body;
    await BlogModel.findById(req.params.id)
    .then(async blog => {
        blog.likes = likes;
        await blog.save()
        .then(() => {
            // console.log('Likes Successfully updated');
            res.send({
                success: "Likes Successfully updated"
            });
        })
        .catch(e => {
            // console.log(`Error: ${e}`);
            res.send({
                error: "Failed to update likes"
            });
        })
    })
    .catch(err => {
        // console.log(`Could not find specified blog. Error: ${err}`);
        res.send({
            error: "Could not find specified blog."
        });
    });
})


module.exports = router;

