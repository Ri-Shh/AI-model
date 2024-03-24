import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './modelDesc.module.css'
import TextEditor from '../components/quilleditor';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import RatingComponent from '../components/rating';
import { FaHeart } from 'react-icons/fa';


function ModelDesc() {

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [user, setUser] = useState({});
  const [model, setModel] = useState({});
  const [likes, setLikes] = useState(0);
  const [cookie, setCookie] = useCookies();

  useEffect(() => {
    axios.get('https://ai-model-api.azurewebsites.net/'+`/api/models/${id}`)
    .then(response => {
      setLikes(response.data.likes.length);
    })
    .catch(e => {
      console.log(`Error in fetching modelll: ${e}`);
    });
  }, []);

  useEffect(() => {
    axios.get('https://ai-model-api.azurewebsites.net/'+`/api/models/${id}`)
    .then(response => {
      setModel(response.data);
      setLikes(response.data.likes.length);
      axios.get('https://ai-model-api.azurewebsites.net/'+`/api/profile/${response.data.userid}`)
      .then(res2 => {
        setUser(res2.data);
      })
      .catch(e => {
        console.log(`Error in fetching user: ${e}`);
      })
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }, [id]);

  const handleLike = async (e) => {
    e.preventDefault();
    await axios.patch('https://ai-model-api.azurewebsites.net/'+`/api/models/${id}`, {likedBy: cookie.userid},
    {headers: {
      Authorization: `Bearer ${cookie['token']}` // Include the access token in the Authorization header
    }})
    .then(response => {
      setLikes(response.data.model.likes.length);
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }

  const path = `/profile/${user._id}`;
  
  return (
    <div className ={styles.container}>
    <div className={styles.header}>
      <Link to={path} style={{ color: 'white' }}><span>{user.username}</span></Link>
      <span>/</span>
      <span>{model.modelname}</span>
      </div>
      <div className={styles.column}>
        <div className={styles.tabs}>
            <Tabs defaultActiveKey="description" id="model-tabs" className="mb-3">
              <Tab eventKey="description" title="Description">
               <div className={styles.desc}>
                <p>
                  {model.desc}
                </p>
               </div>
              </Tab>
              <Tab eventKey="code" title="Code">
                <div className={styles.modelCode}>
                  <TextEditor/>
                </div>
              </Tab>
            </Tabs>
        </div>
        <div className={styles.metadata}>
        <section class="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          <div class="flex justify-between pb-2">
            <dl>
              <dt class="-mb-1 text-sm text-gray-500">
                Downloads last Month
              </dt>
              <dd class="font-semibold">10,765</dd>
            </dl>
            <div className={styles.divider}></div>
            <div className={styles.button} >{model.category}</div>
            <div className={styles.divider}></div>
            <div className={styles.button} >{model.library}</div>
            <div className={styles.divider}></div>
            {/* <div className={styles.bcontainer}> */}
            <div
              className={styles.like}
              onClick={handleLike}>
              {likes} Likes <FaHeart />
            </div>
            <div className={styles.divider}></div>
            <div
              className={styles.rate}
              >
              Rating: {model.rating}
            </div>
            <RatingComponent id={id} />
            </div>
          {/* </div> */}
        </section>
        </div>
      </div>
    </div>
  );
}

export default ModelDesc;