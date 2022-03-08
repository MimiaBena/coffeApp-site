import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palatte' />
      <h1 className='headtext__comorant'>Today&apos;s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_cocktail1 flex__center'>
        <p className='app__specialMenu_menu_heading'>Coffe</p>
        <div className='app__specialMenu_menu_items'>
          {data.coffes.map((coffe, index) => (
            <MenuItem key={coffe.title + index} title={coffe.title} price={coffe.price} tags={coffe.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.dd} alt='alt_menu' />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Tea</p>
        <div className='app__specialMenu_menu_items'>
          {data.teas.map((tea, index) => (
            <MenuItem key={tea.title + index} title={tea.title} price={tea.price} tags={tea.tags} />
          ))}
        </div>
      </div>

    </div>

     <div style={{marginTp: '15px'}}>
       <button type='button' className='custom__botton'>View More </button>
     </div>
  </div>
);

export default SpecialMenu;
