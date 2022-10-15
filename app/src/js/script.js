let makeAsRead = document.querySelector(".make-as-read-btn");
let alert = document.querySelector(".alert");
let overlayer = document.querySelector(".overlayer");

let notificationsMain = document.querySelector(".notifications");

let {
  firstNotification,
  sectNotification,
  thirdtNotification,
  fourthtNotification,
  fifthtNotification,
  sixthtNotification,
  seventhtNotification,
} = notificationsStructures();
function notificationsStructures() {
  let firstNotification = `<div class="notification unread slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-mark-webber.webp" />
          </div>
          <div class="header">
            <h3>
              <span class="user">Mark Webber</span> reacted to your recent post
              <span class="notification-main-text"
                >My first tournament today!</span
              >
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>1m ago</span>
            </div>
          </div>
        </div>`;
  let sectNotification = ` <div class="notification unread slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-angela-gray.webp" />
          </div>
          <div class="header">
            <h3><span class="user">Angela Gray</span> followed you</h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>5m ago</span>
            </div>
          </div>
        </div>`;
  let thirdtNotification = `<div class="notification unread slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-jacob-thompson.webp" />
          </div>
          <div class="header">
            <h3>
              <span class="user">Jacop Thompson</span> has joined your group
              <span class="notification-main-text">Chess Club</span>
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>1d ago</span>
            </div>
          </div>
        </div>`;
  let fourthtNotification = `<div class="notification unread msg slide">
          <div class="user-img">
            <img
              src="../../assets/images/avatar-rizky-hasanuddin.webp"
              alt=""
            />
          </div>
          <div class="header">
            <h3>
              <span class="user">Rizky Hasanuddin</span> sent you a private
              message
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>1 week ago</span>
            </div>
            <div class="message">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>`;
  let fifthtNotification = `<div class="notification unread img slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-kimberly-smith.webp" />
          </div>
          <div class="header">
            <h3>
              <span class="user">Kimberly Smith</span> commented on your picture
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>2 weeks ago</span>
            </div>
          </div>
          <img
            class="seted-pic"
            src="../../assets/images/image-chess.webp"
            alt="Your Picture"
          />
        </div>`;
  let sixthtNotification = `<div class="notification unread slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-nathan-peterson.webp" />
          </div>
          <div class="header">
            <h3>
              <span class="user">Nathan Peterson</span> reacted to your recent
              post
              <span class="notification-main-text"
                >5 end-game strategies to increase your win rate</span
              >
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>2 weeks ago</span>
            </div>
          </div>
        </div>`;
  let seventhtNotification = `<div class="notification unread slide">
          <div class="user-img">
            <img src="../../assets/images/avatar-anna-kim.webp" />
          </div>
          <div class="header">
            <h3>
              <span class="user">Anna Kim left the group </span> reacted to your
              recent post
              <span class="notification-main-text">Chess Club</span>
            </h3>
            <span class="unread-mess"></span>
            <div class="time">
              <span>2 weeks ago</span>
            </div>
          </div>
        </div>`;
  return {
    firstNotification,
    sectNotification,
    thirdtNotification,
    fourthtNotification,
    fifthtNotification,
    sixthtNotification,
    seventhtNotification,
  };
}
setInterval(() => {
  notificationsMain.innerHTML += firstNotification;
}, 20000);
setInterval(() => {
  notificationsMain.innerHTML += sectNotification;
}, 34000);
setInterval(() => {
  notificationsMain.innerHTML += thirdtNotification;
}, 47000);
setInterval(() => {
  notificationsMain.innerHTML += fourthtNotification;
}, 59000);
setInterval(() => {
  notificationsMain.innerHTML += fifthtNotification;
}, 62000);
setInterval(() => {
  notificationsMain.innerHTML += sixthtNotification;
}, 72000);
setInterval(() => {
  notificationsMain.innerHTML += seventhtNotification;
}, 51000);

let unreadNotificationEvents = setInterval(() => {
  let { unreadNotificationNumberSpan, unreadNotificationNumber } =
    unreadNotificationElements();
  function unreadNotificationElements() {
    let allUnreadNotification = document.querySelectorAll(".unread");
    let unreadNotificationNumber = allUnreadNotification.length;
    let unreadNotificationNumberSpan = document.querySelector(
      ".notification-number-span"
    );
    return { unreadNotificationNumberSpan, unreadNotificationNumber };
  }
  let allNotifications = document.querySelectorAll(".notification");
  allNotifications.forEach((notification) => {
    notification.classList.remove("slide");
    makeAsRead.addEventListener("click", () => {
      notification.classList.remove("unread");
    });
  });
  unreadNotificationNumberSpan.textContent = `${unreadNotificationNumber}`;
}, 3000);

const closeAlertButton = document.querySelector(".close");
closeAlertButton.addEventListener("click", () => {
  alert.classList.remove("show");
  overlayer.classList.remove("show");
});
