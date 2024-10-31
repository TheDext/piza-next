import Button from '@/components/common/button/button';
import { User } from 'lucide-react';
import classes from './header.module.scss';
import Image from 'next/image';
import Logo from '../../assets/img/logo.png';
import Search from '@/components/header/search/search';

const Header = () => {
    return (
        <header>
            <div className="_container">
                <div className={classes.header__row}>
                    <Image
                        className={classes.logo}
                        width={202}
                        src={Logo}
                        alt="asd"
                    />
                    <Search />
                    <Button kind="secondary">
                        <User />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
