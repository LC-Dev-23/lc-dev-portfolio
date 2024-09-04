import React from 'react'
import { FaLinkedin, FaFacebookSquare, FaGitlab, FaGithubAlt, FaFacebookMessenger } from 'react-icons/fa'
import ReusableTooltip from './ReusableTooltip'
import Link from 'next/link'

const SocmedIcons = ({ ...props }) => {
    return (
        <ul {...props}>
            <li className="hover:-translate-y-1"><ReusableTooltip triggerContent={<Link href="https://www.linkedin.com/in/lc-dev-ph" target="_blank"><FaLinkedin /></Link>} tooltipText="Connect with me on LinkedIn" /></li>
            <li className="hover:-translate-y-1"><ReusableTooltip triggerContent={<Link href="https://www.facebook.com/lord.christian.agra.23"><FaFacebookSquare /></Link>} tooltipText="Check out my Facebook profile" /></li>
            <li className="hover:-translate-y-1"><ReusableTooltip triggerContent={<Link href="https://m.me/lord.christian.agra.23" target="_blank"><FaFacebookMessenger /></Link>} tooltipText="Got questions? Message me!" /></li>
            <li className="hover:-translate-y-1"><ReusableTooltip triggerContent={<Link href="https://github.com/LC-Dev-23" target="_blank"><FaGithubAlt /></Link>} tooltipText="Collaborate with me on GitHub" /></li>
            <li className="hover:-translate-y-1"><ReusableTooltip triggerContent={<Link href="https://gitlab.com/LC-Dev" target="_blank"><FaGitlab /></Link>} tooltipText="Collaborate with me on GitLab" /></li>
        </ul>
    )
}

export default SocmedIcons
