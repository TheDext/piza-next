//@ts-nocheck
import Button from '@/components/common/button/button';
import { User } from 'lucide-react';
import classes from './header.module.scss';
import Image from 'next/image';
import Logo from '../../assets/img/logo.png';
import Search from '@/components/header/search/search';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="_container">
                <div className={classes.header__row}>
                    <Link href="/">
                        <Image
                            className={classes.logo}
                            width={202}
                            src={Logo}
                            alt="logo"
                        />
                    </Link>
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
