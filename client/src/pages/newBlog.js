import React, { useState } from 'react';
import styles from './newModel.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const categories = ['Text to Image', 'Sentiment Analysis', 'Image Classification', 'Summarization', 'Translation', 'Voice Activity Detection', 'Reinforcement Learning', 'Robotics', 'Video Classification', 'Feature Extraction', 'Object Detection', 'Sentiment Analysis', 'GLOW Model'];
let catObject = [];
let x = 1;
for(let i = 0; i < categories.length; i++) {
  catObject.push({
    name: categories[i],
    id: x++
  });
}

function NewBlogPage() {
  
  const navigator = useNavigate();
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [validationError, setValidationError] = useState('');
  
  const [cookie, _] = useCookies();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Userid: cookie.userid,
      Cat: category,
      Content: content,
      Title: title
    }
    await axios.post('https://ai-model-api.azurewebsites.net/'+'/api/blogs', data, 
    {
      headers: {
        Authorization: `Bearer ${cookie['token']}` // Include the access token in the Authorization header
      } })
    .then(response => {
      // console.log(response.data.success);
      console.log('Query has been posted');
      navigator('/');
    })
    .catch(e => {
      console.log(`Error in posting query: ${e}`);
    })
  };

  return (
    <div className={styles.container}>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center'>Post your Query</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label className= {styles.label}>Username:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={cookie.username}
                    readOnly={true}
                    required
                  />
                </div>
                {/* { isAuthenticated ? <p>ha logged in hai</p> : <p>Nhi hai logged in</p> } */}
                <div className='form-group'>
                  <label className= {styles['label']}>Subject:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Category:</label>
                  <select
                    className='form-control'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    >
                    <option value=''>Select Category</option>
                    {
                      catObject.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)
                    }
                  </select>
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Explain your query:</label>
                  <textarea
                    className='form-control'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group text-center mt-3'>
                  <button type='submit' className="btn btn-success">Post</button>
                </div>
                {validationError && (
                  <div className='alert alert-danger'>{validationError}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlogPage;
