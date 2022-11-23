import { FriendsType } from './type';

import styles from './Friends.module.css';

type FriendsPropsType = {
    friends: Array<FriendsType>;
};

function Friends({ friends }: FriendsPropsType) {
    const friendsList = friends.map((friend) => (
        <li key={friend.id}>
            <img
                className={styles.friends__avatar}
                src={friend.img}
                alt={friend.name}
            />
            <span>{friend.name}</span>
        </li>
    ));

    return <ul className={styles.container}>{friendsList}</ul>;
}

export default Friends;
