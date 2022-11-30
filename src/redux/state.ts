import { StateType } from './type';
import user1Img from '../img/user1.jpg';
import user2Img from '../img/user2.jpg';
import user3Img from '../img/user3.jpg';
import user4Img from '../img/user4.jpg';
import user5Img from '../img/user5.jpg';
import friend1Img from '../img/friend1.jpg';
import friend2Img from '../img/friend2.jpg';
import friend3Img from '../img/friend3.jpg';

export const state: StateType = {
    dialogsPage: {
        dialogNames: [
            { id: 1, name: 'Андрей', img: user1Img },
            { id: 2, name: 'Дмитрий', img: user2Img },
            { id: 3, name: 'Алексей', img: user3Img },
            { id: 4, name: 'Тамара', img: user4Img },
            { id: 5, name: 'Евгения', img: user5Img },
        ],
        dialogMessages: [
            { id: 1, message: 'Андрей, привет! Как дела? Как жизнь?' },
            { id: 2, message: 'Дмитрий, алоха!' },
            { id: 3, message: 'Алексей, хай!' },
            { id: 4, message: 'Тамара, бонжур!' },
            { id: 5, message: 'Евгения, ола!' },
        ],
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hello my dear friends!', likeCounts: 2 },
            { id: 2, message: 'Hi!', likeCounts: 6 },
            { id: 3, message: 'Hey!', likeCounts: 0 },
            { id: 4, message: 'Hey!', likeCounts: 8 },
            { id: 5, message: 'Hey!', likeCounts: 10 },
        ],
    },
    friendsBlock: {
        friends: [
            { id: 1, name: 'Зигмунд', img: friend1Img },
            { id: 2, name: 'Анатоль', img: friend2Img },
            { id: 3, name: 'Фидель', img: friend3Img },
        ],
    },
};
