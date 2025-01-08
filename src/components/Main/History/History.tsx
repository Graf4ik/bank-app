import styles from "./History.module.scss";
import RightArrowIcon from "@/assets/icons/right-arrow-white.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import ContactIcon from "@/assets/icons/contact.svg";

const history = [
  {
    id: 1,
    name: "Alina Socela",
    reason: "Sent: Meal Bills",
    date: "Wed, 27 September 2023",
    time: "1:05 PM",
    currency: "USD",
    sum: 275,
    icon: ContactIcon,
  },
  {
    id: 2,
    name: "Justin Bieber",
    reason: "Received: Your Birthday Gift <3",
    date: "Tue, 26 September 2023",
    time: "9:00 AM",
    currency: "USD",
    sum: 1500,
    icon: ContactIcon,
  },
  {
    id: 3,
    name: "Stream",
    reason: "Payment of Crash Bandicoot 4",
    date: "Mon, 25 September 2023",
    time: "3:15 PM",
    currency: "USD",
    sum: 39.99,
    icon: ContactIcon,
  },
];

export const History: React.FunctionComponent = () => {
  return (
    <section className={styles.history}>
      <div className={styles.historyTitle}>
        <div>Transactions history</div>
        <div className={styles.historyActions}>
          <div className={styles.selectDate}>
            <div>Select Date Range</div>
            <img src={CalendarIcon} className={styles.calendarIcon} />
          </div>
          <img src={RightArrowIcon} className={styles.moreBtn} />
        </div>
      </div>
      <div className={styles.historyData}>
        {history.map(
          ({ id, name, reason, date, time, icon, currency, sum }) => {
            return (
              <div key={id} className={styles.historyItem}>
                <img src={icon} />
                <div className={styles.name}>
                  <div className={styles.title}>{name}</div>
                  <div className={styles.subtitle}>{reason}</div>
                </div>
                <div className={styles.name}>
                  <div className={styles.title}>{date}</div>
                  <div className={styles.subtitle}>{time}</div>
                </div>
                <div className={styles.sum}>
                  <div>
                    {sum} <span>{currency}</span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
