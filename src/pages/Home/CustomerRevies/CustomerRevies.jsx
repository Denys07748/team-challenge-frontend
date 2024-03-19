import React, { useState, useEffect } from 'react';
import styles from './CustomerRevies.module.css';
import img1 from '../../../images/rectangle-23.jpg';
import img2 from '../../../images/rectangle-21.jpg';
import img3 from '../../../images/Rectangle-4.jpg';
import CustomerSplider from './CustomerSplider/CustomerSplider';

function CustomerRevies() {
  const [activeUser, setActiveUser] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth);

  const dataComments = [
    {
      id: 1,
      comment:
        "Homewell is a haven for style enthusiasts like myself. The curated collection is a testament to their dedication to aesthetics and quality. Each piece feels like a work of art, and I'm thrilled with the transformative impact they've had on my living space.",
      name: 'Vlad C',
      photo: img1,
    },
    {
      id: 2,
      comment: 'I love Homewell2 jfvnfjvbpqcmvfhvnbwydwmfef',
      name: 'Vlad C2',
      photo: img2,
    },
    {
      id: 3,
      comment: 'I love Homewell3 ahhdvidnvkdanvkadnvian jnfjvnjnvn nkvnkv',
      name: 'Vlad C3',
      photo: img3,
    },
  ];

  const handlePhotoClick = photoId => {
    setActiveUser(photoId);
  };

  const handlePhotoClickMob = photoId => {
    setActiveUser(photoId.id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.frame}>
        <span className={styles.whatClientsSay}>
          What clients say about <br className={styles.brMob} />
          Homewell
        </span>
      </div>
      <div className={styles.frame1}>
        <span className={styles.homewellTestimonial}>
          {dataComments.find(person => person.id === activeUser).comment}
        </span>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          {isSmallScreen < 1279 ? (
            <CustomerSplider
              handlePhotoClickMob={handlePhotoClickMob}
              activeUser={activeUser}
            />
          ) : (
            dataComments.map(person => (
              <div key={person.id} className={styles.personContainer}>
                <img
                  key={person.id}
                  src={person.photo}
                  alt={`${person.id}`}
                  className={`${
                    activeUser === person.id
                      ? styles.ellipse
                      : styles.ellipseNone
                  }`}
                  onClick={() => handlePhotoClick(person.id)}
                />

                <div className={styles.frame5}>
                  <span
                    className={`${
                      activeUser === person.id ? styles.name : styles.nameNone
                    }`}
                  >
                    {dataComments.find(person => person.id === activeUser).name}
                  </span>
                </div>
              </div>
            ))
          )}
          <div className={styles.frame4}></div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRevies;
