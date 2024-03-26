const { model, Schema } = require('mongoose');


const AIModelSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    modelname: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        enum: [0,1,2,3,4,5],
        default: 0
    },
    likes: {
        type: Array,
        default: []
    },
    count: {
        type: Number,
        default: 0,
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Text to Image', 'Sentiment Analysis', 'Image Classification', 'Summarization', 'Translation', 'Voice Activity Detection', 'Reinforcement Learning', 'Robotics', 'Video Classification', 'Feature Extraction', 'Object Detection', 'Sentiment Analysis', 'GLOW Model'],
        default: 'Text to Image',
    },
    library: {
        type: String,
        enum: ['Pytorch', 'Tensorflow', 'Keras', 'Transformers', 'NeMo', 'OpenCLIP', 'Rust', 'spaCy', 'paddlenlp', 'Diffusers', 'fastText'],
        default: 'Pytorch'
    }
});



const AIModel = model('AImodel', AIModelSchema);
module.exports = AIModel;