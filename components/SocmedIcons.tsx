import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa'

const SocmedIcons = ({ ...props }) => {
    return (
        <ul {...props}>
            <li className="hover:-translate-y-1"><a href="https://www.facebook.com/lord.christian.agra.23"><FaFacebook /></a></li>
            <li className="hover:-translate-y-1"><a href="https://www.linkedin.com/in/lc-dev-ph" target="_blank"><FaLinkedin /></a></li>
            <li className="hover:-translate-y-1"><a href="https://github.com/LC-Dev-23" target="_blank"><FaGithub /></a></li>
            <li className="hover:-translate-y-1"><a href="https://gitlab.com/LC-Dev" target="_blank"><FaGitlab /></a></li>
        </ul>
    )
}

export default SocmedIcons
