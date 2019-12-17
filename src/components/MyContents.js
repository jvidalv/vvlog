import React from "react";
import {
    FaEnvelopeOpen,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaInstagram,
    FaLinkedinIn,
    FaReddit,
    FaStackOverflow,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";
import {Form} from "react-bootstrap";
import {IconA, ShareA, SharerStyled} from "./MyContentsStyle";
import {ButtonStyled, H3, InputStyled} from "../styles/GenericStyles";

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export const Network = props => {
    const {url, title, icon} = props;
    return (
        <IconA href={url} title={title} target="_blank">
            {icon}
        </IconA>
    );
};

/**
 * Returns an inline element with all my social networks
 * Ready to use everywhere as it contains until the container component
 * @param props
 * @returns {*}
 * @constructor
 */
export function MyNetworks(props) {
    const {className} = props;
    return (
        <div className={"text-center " + className}>
            <Network
                url="mailto:josepvidalvidal@gmail.com"
                title="Send me an email"
                icon={<FaEnvelopeOpen/>}
            />
            <Network
                url="https://github.com/jvidalv"
                title="My GitHub!"
                icon={<FaGithub/>}
            />
            <Network
                url="https://www.instagram.com/jvidalv/"
                title="Its my Insta"
                icon={<FaInstagram/>}
            />
            <Network
                url="https://stackoverflow.com/users/9724551/josep-vidal?tab=profile"
                title="I also participate on SO!"
                icon={<FaStackOverflow/>}
            />
            <Network
                url="https://www.linkedin.com/in/josepvidalvidal/"
                title="My profesional profesion pro profile"
                icon={<FaLinkedinIn/>}
            />
            <Network
                url="http://www.vidal.fun"
                title="My personal page!"
                icon={<FaGlobe/>}
            />
        </div>
    );
}

/**
 * @param props
 * @returns {*}
 * @constructor
 */
const ShareOption = props => {
    const {url, title, icon, iconColor, className} = props;
    return (
        <ShareA
            href={url}
            className={className}
            title={title}
            iconColor={iconColor}
            target="_blank"
        >
            {icon}
        </ShareA>
    );
};

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export function Sharer(props) {
    const {title} = props;
    let location = window.location.href;

    return (
        <>
            <SharerStyled className={props.className}>
                <ShareOption
                    url={"https://www.facebook.com/sharer/sharer.php?u=" + location}
                    icon={<FaFacebook/>}
                    title="Share on Facebook! 💖"
                    className="left-bar"
                />
                <ShareOption
                    url={
                        "https://www.reddit.com/submit?url=" + location + "&title=" + title
                    }
                    icon={<FaReddit/>}
                    title="Share on Reddit! 💖"
                />
                <ShareOption
                    url={"https://web.whatsapp.com/send?text=" + location}
                    icon={<FaWhatsapp/>}
                    title="Share on Whatsapp! 💖"
                />
                <ShareOption
                    url={
                        "https://twitter.com/intent/tweet?url=" +
                        location +
                        "&text=" +
                        title +
                        "&original_referer=" +
                        location
                    }
                    icon={<FaTwitter/>}
                    title="Share on Twitter! 💖"
                />
                <ShareOption
                    url={
                        "https://www.linkedin.com/sharing/share-offsite/?url=" + location
                    }
                    icon={<FaLinkedinIn/>}
                    className="right-bar"
                    title="Share on LinkedIn! 💖"
                />
            </SharerStyled>
        </>
    );
}

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export function Subscribe(props) {
    return (
        <>
            <H3>
                <span role="img" aria-label="train">
                  🚇
                </span>
                Subscribe and stay in touch
            </H3>
            <Form className="my-4">
                <InputStyled className="text-center" placeholder="your email"/>
            </Form>
            <ButtonStyled>Subscribe</ButtonStyled>
        </>
    );
}
