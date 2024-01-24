import Image from 'next/image';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-holder">
                    <Image src="/assets/Marca-Flexy.svg" alt="Flexy Logo" width={134} height={40} priority />
                    <button className='burger-btn'>
                        <Image src="/assets/menu.svg" alt="Burger" width={24} height={24} priority />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header