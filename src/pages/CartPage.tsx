import React from 'react';
import { Link } from 'react-router-dom';
import IPageProps from '../interfaces/page.interface';

const CartPage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link to={`/`}>
                <button>Вернуться на домашнюю страницу</button>
            </Link>
        </div>
    );
}
export default CartPage;