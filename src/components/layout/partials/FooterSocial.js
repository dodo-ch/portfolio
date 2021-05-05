import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  size,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      {size ? 
      <ul className="list-reset">
      <li>
          <a href="mailto:chren.dodo@gmail.com">
         <img src={`${require('../../../assets/images/mail.svg')}`}/>
         
            <svg
              width={size}
              height={size}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
            </svg>
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/in/jozefchren">
         <img src={`${require('../../../assets/images/linkedin.svg')}`}/>
         
            <svg
              width={size}
              height={size}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
            
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/dodo-ch">
          <img src={`${require('../../../assets/images/github.svg')}`}/>
            <svg
              width={size}
              height={size}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
             
            </svg>
          </a>
        </li>
      </ul>
    
    :
    
    <ul className="list-reset">
      <li>
          <a href="mailto:chren.dodo@gmail.com">
         <img src={`${require('../../../assets/images/mail.svg')}`}/>
         
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
            </svg>
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/in/jozefchren">
         <img src={`${require('../../../assets/images/linkedin.svg')}`}/>
         
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
            
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/dodo-ch">
          <img src={`${require('../../../assets/images/github.svg')}`}/>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
             
            </svg>
          </a>
        </li>
      </ul>
    
    }
      
    </div>
  );
}

export default FooterSocial;