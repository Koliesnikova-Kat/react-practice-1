import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '28px' }}>
        <Icon />
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
