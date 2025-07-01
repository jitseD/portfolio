import { RiInstagramLine, RiBehanceLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
    return (
        <ul className="socials">
            <li className="social__item">
                <a
                    className="social__link hover--circle"
                    href="https://www.instagram.com/dekeyser_designs/"
                    target="_blank"
                >
                    <RiInstagramLine className="social__icon" />
                    Instagram
                </a>
            </li>
            <li className="social__item">
                <a className="social__link hover--circle" href="https://www.behance.net/jitsedekeyser" target="_blank">
                    <RiBehanceLine className="social__icon" />
                    Behance
                </a>
            </li>
            <li className="social__item">
                <a className="social__link hover--circle" href="https://github.com/jitseD" target="_blank">
                    <RiGithubLine className="social__icon" />
                    GitHub
                </a>
            </li>
            <li className="social__item">
                <a
                    className="social__link hover--circle"
                    href="https://www.linkedin.com/in/jitse-dekeyser-92977529b/"
                    target="_blank"
                >
                    <RiLinkedinLine className="social__icon" />
                    LinkedIn
                </a>
            </li>
        </ul>
    );
};

export default Socials;
