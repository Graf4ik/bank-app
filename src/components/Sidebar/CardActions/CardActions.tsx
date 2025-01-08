import styles from "./CardAction.module.scss";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import CardIcon from "@/assets/icons/card.svg";
import PinCodeIcon from "@/assets/icons/pin-code.svg";
import LockIcon from "@/assets/icons/lock.svg";
import PlusIcon from '@/assets/icons/plus.svg';
import MinusIcon from '@/assets/icons/minus.svg';

const cardActions = [
    {
      id: 1,
      title: "Show card details",
      icon: CardIcon,
    },
    {
      id: 2,
      title: "Your PIN",
      icon: PinCodeIcon,
    },
    {
      id: 3,
      title: "Security Code",
      icon: LockIcon,
    },
    {
      id: 4,
      title: "Edit limits",
      icon: FilterIcon,
    },
  ];

export const CardActions: React.FunctionComponent = () => {
  return (
    <>
     <ul>
          {cardActions.map(({ id, title, icon }) => {
            return (
                <li className={styles.listItem} key={id}>
                  <img src={icon} className={styles.icon} />
                  <div className={styles.cardTitle}>{title}</div>
                  <img src={RightArrowIcon} className={styles.arrowIcon} />
                </li>
            );
          })}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.addBtn}>Add Card <img src={PlusIcon} /></button>
          <button className={styles.removeBtn}>Remove <img src={MinusIcon} /></button>
        </div>
    </>
  );
};
