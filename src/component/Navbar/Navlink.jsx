import { ActiveLink, usePath } from 'raviger';

export function NavLink(props) {
    const { label, link,} = props;
    const path = usePath();

    return (
        <li>
            <ActiveLink
                href={link}
                className="cursor-pointer text-gray-600 hover:text-red-700"
                exactActiveClass="cursor-pointer text-red-700 hover:text-red-700/60"
            >
                {label}
            </ActiveLink>
        </li>
    );
}