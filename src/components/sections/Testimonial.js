import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [openModalById, setOpenModalbyId] = useState(null);

  const openModal = (e,id) => {
    console.log(id)
    e.preventDefault();
    setVideomodalactive(true);
    setOpenModalbyId(id)
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
    setOpenModalbyId(null)
  }   

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Featured Projects',
    /*paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'*/
  };

  let projects = [
    {
      id: 0,
      title: 'Soccer Stats',
      color: '#29A699',
      text: 'Quasar, Vue.js, Electron, Cordova',
      image:`${require('./../../assets/images/portfolio/soccer-loading.jpg')}`,
      year: 2018,
      detailImages: [
        `${require('./../../assets/images/portfolio/soccer-home.jpg')}`,
        `${require('./../../assets/images/portfolio/socer-matches.jpg')}`,
      ],
      detailText: 'Implemented calculation of chances to win the home team with an overview of football statistics.'
    },
    
    {
      id: 1,
      title: 'Contact Keeper',
      color: '#104AA6',
      text: 'React, Redux, Express.js, MongoDB',
      image:`${require('./../../assets/images/portfolio/keeper-after login.jpg')}`,
      year: 2019,
      detailImages: [
        `${require('./../../assets/images/portfolio/keeper login.jpg')}`,
        `${require('./../../assets/images/portfolio/keeper-after login.jpg')}`,
      ],
      detailText: "Creating a contact, saving to a database, editing a record in the DB and deleting."
    },
    
    {
      id: 2,
      title: 'GitHub Finder',
      color: '#D94A56',
      text: 'React, Redux, Express.js, Rest',
      image:`${require('./../../assets/images/portfolio/github-finder.jpg')}`,
      year: 2019,
      detailImages: [
        `${require('./../../assets/images/portfolio/github-finder.jpg')}`,
        `${require('./../../assets/images/portfolio/search.jpg')}`,
        `${require('./../../assets/images/portfolio/user.jpg')}`,
      ],
      detailText: "Connect to GitHub API and create frontend."
    },

    {
      id: 3,
      title: 'Covid Stats',
      color: '#2669BF',
      text: 'Flutter, Rest',
      image:`${require('./../../assets/images/portfolio/covid-stats-copy.jpg')}`,
      year: 2020,
      detailImages: [
        `${require('./../../assets/images/portfolio/covid-stats.jpg')}`,
      ],
      detailText: "Flutter application for displaying statistics in countries using Rest API."
    },
    {
      id: 4,
      title: 'Order App',
      color: '#04BFBF',
      text: 'React Native, Express.js',
      image:`${require('./../../assets/images/portfolio/rn-1-copy.jpg')}`,
      year: 2020,
      detailImages: [
        `${require('./../../assets/images/portfolio/rn-1.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-2.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-3.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-4.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-5.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-6.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-a1.jpg')}`,
        `${require('./../../assets/images/portfolio/rn-a2.jpg')}`,
      ],
      detailText: "Vaccination ordering application design in React Native with backend connection - Express.js."
    },
    {
      id: 5,
      title: 'BooCal',
      color: '#A6294B',
      text: 'TypeScript, React, Express.js, MongoDB',
      image:`${require('./../../assets/images/portfolio/alt3.jpg')}`,
      year: 2020,
      detailImages: [
        `${require('./../../assets/images/portfolio/alt1.jpg')}`,
        `${require('./../../assets/images/portfolio/alt2.jpg')}`,
        `${require('./../../assets/images/portfolio/alt3.jpg')}`,
        `${require('./../../assets/images/portfolio/alt4.jpg')}`,
        `${require('./../../assets/images/portfolio/alt-m.jpg')}`,

      ],
      detailText: "application for booking - creation of qr code, dynamic recalculation of time slots, sending emails, administration of clients and users, creation of reports."
    },
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {projects.map((i)=>{
              return(
                <>
                  <div className="tiles-item reveal-from-right" data-reveal-delay="200"  onClick={(e)=>{openModal(e, i.id)}} 
                  style={{cursor: 'pointer'}}>
                          <div className="tiles-item-inner">
                            <div className="has-bottom-divider">
                                <span className="testimonial-item-link h3">
                                  <a href="#0" style={{color: i.color}}>{i.title}</a>
                                </span>
                              </div>
                              <div /*className="testimonial-item-content"*/>
                                <p className="text-xs mb-12">
                                  {i.text}
                                </p>
                                <Image
                                  src={i.image}
                                  alt="Features split 03"
                                  width={528}
                                  height={396} />
                              </div>
                              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                <span className="testimonial-item-name">{i.year}</span>
                              </div>
                            </div>
                      </div>
                     
                    {i.id === openModalById && 
                    <Modal
                        id="modal"
                        show={videoModalActive}
                        handleClose={closeModal}
                        children={
                          <>
                            <h2 className="mt-0" style={{color: i.color}}>{i.title}</h2>
                              <p className="m-0">{i.detailText}</p>
                              <p className="text-xxs fw-600 m-8 mb-12">{i.text}</p>
                            
                              {i.detailImages.map((j)=>{
                                return(
                                  <Image
                                  className="mb-12"
                                    src={j}
                                    alt="Features split 03"
                                    width={528}
                                    height={396} 
                                    />
                                )
                              })}
                              
                          </>
                        }
                    />
                    }
                </>
              )
            })}

        {/*
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>
           */}

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;