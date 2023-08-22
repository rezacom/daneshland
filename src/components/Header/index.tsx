import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

// import * as S from './styles';

import HeaderNav from './lib/nav';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-3xl font-bold">
        <a href="/">
          <span className="text-teal-500">Blog</span>
        </a>
      </h1>
      <HeaderNav />
      <div className="relative">
        <Menu>
          <Menu.Button>
            <UserCircleIcon width={32} height={32} />
          </Menu.Button>
          <Menu.Items className="absolute left-0 overflow-hidden rounded bg-slate-700 shadow">
            <Menu.Item>
              {() => (
                <Link
                  className="block whitespace-nowrap px-4 py-2 text-sm transition-colors duration-150 hover:bg-slate-600"
                  to={'/profile'}
                >
                  پروفایل
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {() => (
                <Link
                  className="block whitespace-nowrap px-4 py-2 text-sm transition-colors duration-150 hover:bg-slate-600"
                  to={'/liked-posts'}
                >
                  علاقه مندی ها
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
