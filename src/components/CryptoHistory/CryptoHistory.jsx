import { format } from 'date-fns';
import style from './CryptoHistory.module.css';

export const CryptoHistoryItem = ({ index, price, amount, date }) => {
  return (
    <>
      <td className={style.td}>{index}</td>
      <td className={style.td}>{price}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{date}</td>
    </>
  );
};

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={style.tr}>
            <CryptoHistoryItem
              index={index + 1}
              price={item.price}
              amount={item.amount}
              date={format(new Date(item.date), 'MM/dd/yyyy, hh:mm a')}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
